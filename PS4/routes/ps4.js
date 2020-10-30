const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');
const FETCHCONFIG = require('../config/fetchConfigs');

// const doRequest = country => {
//     return new Promise((resolve, reject) => {
//         console.log(`In the promise, check the cases in ${country}`);
//         resolve(country);
//     });
// }

const doRequest = async country => {
    let rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url);
    let cleanReturnValue = await rawReturnValue.json();
    if (cleanReturnValue.status === 200) {
        return cleanReturnValue.data;
    } else {
        throw new Error(`Oops! Something went wrong!`);
    }
};


doRequest('USA')
    .then(cleanReturnValue => {
        let summary = cleanReturnValue.summary;
        console.log(`Rcvd: ${summary}`);
        console.log(`Rcvd: ${cleanReturnValue.change}`);
        console.log(`Rcvd: ${cleanReturnValue.regions.usa}`);

        router.route('/')
            .get((req, res, next) => {
                console.log(`Rendering...`);
                let subdata = cleanReturnValue.regions.usa;
                res.render('ps4',
                    { country: 'USA', total_cases : subdata.total_cases, active_cases: subdata.active_cases,
                    tested: subdata.tested, death_ratio: subdata.death_ratio, recovery_ratio: subdata.recovery_ratio});
            });

    })
    .catch(error => {
        console.log(`Caught an error: ${error.message}`);
    })
    .finally(_ => {
        console.log(`Done!`);
    });



module.exports = router;