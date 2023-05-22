const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Developer Skills' });
});

// router.get('/', index);

module.exports = router;
