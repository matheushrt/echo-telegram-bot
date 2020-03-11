/* eslint-disable @typescript-eslint/camelcase */
import express from 'express';
import { webhookMiddleware } from '../middlewares';

const router = express.Router();

router.post('/', webhookMiddleware);

export default router;
