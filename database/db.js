const centralConfig = require('../config/centralConfig');
const PoolClass = require('pg').Pool;

const pool = new PoolClass({
    user: centralConfig.db_user,
    host: centralConfig.db_host,
    database: centralConfig.db_database,
    port: centralConfig.port,
    password: centralConfig.db_password
});

module.exports = {
    query: (queryText, params,callback)=>{
        return pool.query(queryText,params,callback)
    } 
}