const express = require('express');
const router = express.Router();
const request = require('request');
const FETCHCONFIG = require('../config/fetchConfig');


const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flushdb((err, response) => {
  if (err) { throw new Error('something bad happened when I flushed')}
});

router.get('/', (req, res) => {
  res.render('index', {weather: null, error: null});
})

router.post('/', async (req, res) => {
  //grab the query city
  let city = req.body.city;
  //check cache, query the key
  let match = await asyncExists(city);
  //if in cache, return the query
  if (match){
    let value = await asyncGet(city);
    let response = {
      key: city,
      value: value,
      cached: true
    };
    res.json(response);
    // res.render('index', {weather: weatherText, error: null});
    //if not in cache, call the third-party API and then set in cache with city name as key, then return
  } else {
    let url = FETCHCONFIG.geturl(city);

    request(url, async function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
          let celsius = parseFloat(weather.main.temp) - 272.15;
          let fahrenheit = celsius * 9 / 5 + 32;
          let weatherText = `It's ${celsius.toFixed(2)}°C or ${fahrenheit.toFixed(2)}°F in ${weather.name}! The weather looks like: ${weather.weather[0].description}.`;
          // res.render('index', {weather: weatherText, error: null});
          let status = await asyncSet(city, weatherText);
          status = await asyncExpire(city, 15);
          let response = {
            key: city,
            value: weatherText,
            cached: false
          }
          res.json(response);
        }
      }
    });
  }

})

module.exports = router;
