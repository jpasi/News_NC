const knex = require('../../db')

module.exports = {
    async index(req, res, next) {
        try {
            const { article_id } = req.query;
            const query = knex('article')
            if (article_id) {
                query
                .where({ article_id })
                .join('author', 'author.article_id', '=','article.id')
                .select('article.*', 'author.name', 'author.picture')                
            }

            const results = await query

            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            const { author, category, title, summary, firstParagraph, body } = req.body
        
            await knex('article').insert({ author, category, title, summary, firstParagraph, body })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { author, category, title, summary, firstParagraph, body } = req.body
            const { id } = req.params
        
            await knex('article').update({ 
                author, 
                category, 
                title, summary, 
                firstParagraph, 
                body })
                .where({ id })


            return res.send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params
        
            await knex('article')
            .where({ id })
            .del()


            return res.send()
        } catch (error) {
            next(error)
        }
    }
}