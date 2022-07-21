import { createConnection } from 'mysql';
import { config } from 'dotenv';

config();

export const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

async function allUsers() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users`, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

async function withConnection(fn) {
    connection.connect();
    return await fn();
    connection.end();
}

export async function getAllUsers() {
    return await withConnection(allUsers);
}