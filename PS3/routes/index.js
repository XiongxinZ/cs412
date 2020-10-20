var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS412' });
});

router.get('/fx',
    (req, res, next) => {
      const options = {
        'method': 'GET',
        'url': 'http://apilayer.net/api/live?access_key=707d4d2111a1976c7c4bbd767a9bf3a6&currencies=EUR,GBP,JPY&format',
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(JSON.parse(response.body));
        // res.json(response.body);
        res.render('index',
            {title: JSON.parse(response.body)})
      });
    }
    )



module.exports = router;
