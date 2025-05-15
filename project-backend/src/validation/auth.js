import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(32)
    .required()
    .messages({
      'string.min': 'Should be at least 3 symbols',
      'string.max': 'The name must contain no more than 32 characters',
      'any.required': 'Name is required field'
    }),

  email: Joi.string()
    .email()
    .max(64)
    .required()
    .messages({
      'string.email': 'Wrong email format',
      'string.max': 'Email must contain no more than 64 characters',
      'any.required': 'Email is required field'
    }),

  password: Joi.string()
    .min(8)
    .max(64)
    .required()
    .messages({
      'string.min': 'Should be at least 8 symbols',
      'string.max': 'Password must contain no more than 64 characters',
      'any.required': 'Password is required field'
    })
});
