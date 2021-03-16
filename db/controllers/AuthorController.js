const knex = require('../../db')

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('author')
            return res.json(results)
        } catch (error) {
            next(error)
        }


    },
    async create(req, res, next) {
        try {
            const { name, picture } = req.body
        
            await knex('author').insert({ name, picture })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { name, picture } = req.body
            const { id } = req.params
        
            await knex('author').update({ 
                name, picture })
                .where({ id })


            return res.send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params
        
            await knex('author')
            .where({ id })
            .del()


            return res.send()
        } catch (error) {
            next(error)
        }
    }
}