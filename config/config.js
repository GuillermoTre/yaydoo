const centralConfig = require('./centralConfig');

module.exports = {
    username: centralConfig.db_user,
    password: centralConfig.db_password,
    database: centralConfig.db_database,
    host: centralConfig.db_host,
    port: centralConfig.db_port,
    dialect: 'postgres'
};