const db_user = process.env.db_user || 'postgres';
const db_password = process.env.db_password || 'postgres';
const db_database = process.env.db_name || 'dbyaydoo';
const db_host = process.env.db_host || '127.0.0.1';
const db_port = process.env.db_port || 5432;

const CONFIG = {
    db_user,
    db_password,
    db_database,
    db_host,
    db_port
}

module.exports = CONFIG;