const con = require('../utils/db');

const getArticlesByAuthor = (req, res) => {
    let query = `SELECT * FROM article WHERE author_id = ${req.params.id}`;
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        res.render('index', { articles: articles })
    })
};

module.exports = {
    getArticlesByAuthor
};