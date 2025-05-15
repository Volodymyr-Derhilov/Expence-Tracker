import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';
import { validBody } from '../middlewares/validBody.js';

const router = Router();

router.post(
  '/register',
  validBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

export default router;
