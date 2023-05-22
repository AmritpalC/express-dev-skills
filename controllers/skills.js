// ? Model methods - linking skills list from controls to the route to the view

const Skill = require('../models/skill')

// const { getAll, getOne } = require('../models/skill')

module.exports = {
    index,
    show
}

function index(req, res, next) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Developer Skills'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    });
}