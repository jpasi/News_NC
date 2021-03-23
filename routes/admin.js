const express = require("express")
const router = express.Router()

const ArticleController = require('../db/controllers/ArticleController')
const AuthorController = require('../db/controllers/AuthorController')


const knex = require('../db')

//Connect Postgress
const { Client } = require('pg');
const connectionString = 'postgres://postgres:123456@localhost:5432/newsdb';

const client = new Client({
    connectionString: connectionString
});

client.connect();

// router.get('/', (req, res) => {
//     res.render("admin/articlesLogged")
// })

// router.get('/api/articles', (req, res) => {
//     res.render("admin/articlesLogged")
// })

router.get('/api/admin/articles', (req, res) => {
    res.render("admin/addArticles")
})

router.get('/api/admin/articles/:id', async (req, res) => {
            const query = knex('article')
            const { id } = req.params

            query
            .where({ id })
            .select('*')

            const results = await query
            res.render("admin/updateArticles", {results: results})

})

router.get('/authors/add', (req, res) => {
    res.render("admin/addAuthors")
})

// Articles db
router.get('/api/articles', ArticleController.index)
router.get('/', ArticleController.index)
router.post('/api/admin/articles', ArticleController.create)
router.put('/api/admin/articles/:id', ArticleController.update)
router.delete('/api/admin/articles/:id', ArticleController.delete)

// Authors db
router.get('/api/authors', AuthorController.index)
router.post('/api/authors', AuthorController.create)
router.put('/api/author/:id', AuthorController.update)
router.delete('/api/author/:id', AuthorController.delete)


module.exports = router