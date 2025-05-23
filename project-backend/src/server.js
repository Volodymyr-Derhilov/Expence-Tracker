import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import cookieParser from 'cookie-parser';

import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/index.js';
import authRouter from './routers/auth.js';
import transactionsRouter from './routers/transactionsRouter.js';

const port = Number(getEnvVar('PORT', 3000));

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  // Основні маршрути (включно з /auth)
  app.use(router);

  app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to Spendy - Expense Tracker backend',
    });
  });
  app.use('/auth', authRouter);

  // маршрут transactions
  app.use('/transactions', transactionsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(port, () => console.log(`Server is running on port ${port}`));
};
