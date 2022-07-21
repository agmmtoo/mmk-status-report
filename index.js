import { createServer } from 'http';
import { config } from 'dotenv';

import app from './express.js';

config();

// database setup

import { createConnection } from 'mysql';

export const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    socketPath: '/var/run/mysqld/mysqld.sock',
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

const PORT = process.env.PORT;

const server = createServer(app);

server.listen(PORT);

server.on('listening', () => `Listening on ${PORT}`);