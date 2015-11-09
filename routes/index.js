(function () {
  "use strict";

  let express = require('express')
    , router = express.Router()
    , diff = require('diff-ini-format');

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.post('/difference', function(req,res, next) {
    let original = req.body.original;
    let changed = req.body.changed;

    res.json(diff(original, changed));
  });

  module.exports = router;
})();
