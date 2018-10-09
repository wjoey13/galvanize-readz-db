// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/readz_my_db'
  },

  

  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL
    }
  }
};
