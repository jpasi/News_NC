exports.up = knex => knex.schema.createTable('article', (table)=>{
        table.increments('id').primary();
        table.string('category').notNullable();
        table.string('title').notNullable();
        table.string('summary').notNullable();
        table.string('firstParagraph').notNullable();
        table.string('body').notNullable();
        table.integer('is_logged').notNullable().defaultTo(0);
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())


    }) 


exports.down = knex => knex.schema.dropTable('article');
  