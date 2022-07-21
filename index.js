import { createServer } from 'http';
import { config } from 'dotenv';

import app from './express.js';

config();

const PORT = process.env.PORT;

const server = createServer(app);

server.listen(PORT);

server.on('listening', () => `Listening on ${PORT}`);