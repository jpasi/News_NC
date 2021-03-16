const express = require("express")
const router = express.Router()

const ArticleController = require('../db/controllers/ArticleController')
const AuthorController = require('../db/controllers/AuthorController')


//Connect Postgress
const { Client } = require('pg');
const connectionString = 'postgres://postgres:123456@localhost:5432/newsdb';

const client = new Client({
    connectionString: connectionString
});

client.connect();

router.get('/', (req, res) => {
    res.render("admin/articles")
})

router.get('/articles', (req, res) => {
    res.render("admin/articles")
})

router.get('/articles/add', (req, res) => {
    res.render("admin/addArticles")
})

router.get('/authors', (req, res) => {
    res.render("admin/authors")
})

router.get('/authors/add', (req, res) => {
    res.render("admin/addAuthors")
})

// Articles db
router.get('/api/admin/articles', ArticleController.index)
router.post('/api/admin/articles', ArticleController.create)
router.put('/api/admin/articles/:id', ArticleController.update)
router.delete('/api/admin/articles/:id', ArticleController.delete)

// Authors db
router.get('/api/admin/authors', AuthorController.index)
router.post('/api/admin/authors', AuthorController.create)
router.put('/api/admin/author/:id', AuthorController.update)
router.delete('/api/admin/author/:id', AuthorController.delete)


module.exports = router