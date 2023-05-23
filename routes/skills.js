var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// GET / skills

router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

// router.put('/:id', skillsCtrl.update);

module.exports = router;