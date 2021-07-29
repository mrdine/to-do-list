
module.exports = {
  development: {
    username: 'username',
    password: 'password',
    database: 'database',
    dialect: 'sqlite',
    storage: `${__dirname}/../db.sqlite`
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
    }
  }
};
