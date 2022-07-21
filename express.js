import express from 'express';
import cors from 'cors';
import compression from 'compression';

// routers
import { auth } from './controllers/auth.controller.js';
import userRouter from './routes/user.router.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

// auth routh
app.use(auth);

// api routes
app.use('/api/v1/users', userRouter);

export default app;