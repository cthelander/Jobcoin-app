var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const request = require('request');
  request('http://jobcoin.gemini.com/guileless/api/addresses/' + req.query.address, { json: true }, (err, exRes, body) => {
      if (err) { return console.log(err); }
      res.send(exRes.body);
  });
});

module.exports = router;
