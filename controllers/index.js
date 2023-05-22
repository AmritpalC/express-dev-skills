function index(req, res, next) {
    res.render('index', { title: 'Express Skills' });
}

module.exports = {
    index
}