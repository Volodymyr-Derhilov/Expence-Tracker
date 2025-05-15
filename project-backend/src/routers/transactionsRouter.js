import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getTransactionsController } from '../controllers/transactionsController.js';

const transactionsRouter = Router();

export default transactionsRouter;

transactionsRouter.get('/', ctrlWrapper(getTransactionsController));
