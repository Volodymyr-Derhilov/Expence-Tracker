import { UsersCollection } from '../db/models/user.js';

export const registerUser = async (payload) => {
  try {
    console.log('Attempting to create user with payload:', payload);
    const user = await UsersCollection.create(payload);
    console.log('User created successfully:', user);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
