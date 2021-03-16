exports.up = knex => knex.schema.createTable('author', (table)=>{
    table.increments('id').primary();
    table.string('name');
    table.string('picture');

    //relations
    table.integer('article_id')
    .references('article.id')
    .onDelete('CASCADE')


    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
}) 


exports.down = knex => knex.schema.dropTable('author');
