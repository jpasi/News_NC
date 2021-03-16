// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "newsdb",
      user: "postgres",
      password: "123456"
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: "newsdb",
      user: "postgres",
      password: "123456"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '${__dirname}/migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: "newsdb",
      user: "postgres",
      password: "123456"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
