import Joi from 'joi';
import { EMAIL_REG_EXP } from '../constants/auth.js';

export const authLoginSchema = Joi.object({
  email: Joi.string().pattern(EMAIL_REG_EXP).max(64).required(),
  password: Joi.string().min(8).max(64).required(),
});
