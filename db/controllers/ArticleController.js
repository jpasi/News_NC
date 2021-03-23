const knex = require('../../db')

module.exports = {
    async index(req, res, next) {
        try {
            const { article_id }  = req.query;
            const query = knex('article')
           
            if (article_id) {
                query
                .where({ article_id })
                .join('author', 'author.article_id', '=','article.id')
                .select('article.id', 'author.author', 'article.title', 'article.summary', 'article.firstParagraph', 'article.body')
            }else{
                query
                .join('author', 'author.article_id', '=','article.id')
                .select('article.id', 'author.author', 'article.title', 'article.summary', 'article.firstParagraph', 'article.body')
            }

            const results = await query
            res.render("admin/articlesLogged", {results: results})
            
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {
          
            const { category, title, summary, firstParagraph, body } = req.body
        
            await knex('article').insert({ 
                category, 
                title, 
                summary, 
                firstParagraph, 
                body })

            
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { category, title, summary, firstParagraph, body } = req.body
            const { id } = req.params
            
            await knex('article').where({ id }).update({  
                    category, 
                    title, 
                    summary, 
                    firstParagraph, 
                    body })
                

             
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