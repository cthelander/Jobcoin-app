var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  const request = require('request');
  let params = req.body;
  request.post('http://jobcoin.gemini.com/guileless/api/transactions', {
    json: {
      toAddress: params.toAddress,
      fromAddress: params.fromAddress,
      amount: params.amount
    }
  }, (err, exRes, body) => {
      if (err) { return console.log(err); }
      res.send(exRes.body);
  });
});

module.exports = router;
