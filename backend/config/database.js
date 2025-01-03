const { Pool } = require('pg');

const pool = new Pool({
    user: 'admin',
    host: 'postgres',
    database: 'test_simulation',
    password: 'abdo',
    port: 5432,
});

module.exports = pool;
