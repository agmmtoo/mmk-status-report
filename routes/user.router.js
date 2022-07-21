import express from 'express';

// controllers
import { list } from '../controllers/user.controller.js';

const router = express.Router();

// PATH: /api/v1/users

// METHOD: GET
router.route('/')
    .get(list);

export default router;