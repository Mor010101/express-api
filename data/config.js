import mysql from 'mysql'

const config = {
    host: 'localhost',
    user: 'root',
    password: 'Aceg123#',
    database: 'sys',
};

const pool = mysql.createPool(config);

export default pool 