import { Router } from 'express';

import { validateBody } from '../utils/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authLoginSchema } from '../validation/auth.js';
import { loginUserController } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/login',
  validateBody(authLoginSchema),
  ctrlWrapper(loginUserController),
);

export default authRouter;
