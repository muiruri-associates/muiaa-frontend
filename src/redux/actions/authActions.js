import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (loginData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/v1/auth/login', loginData);
    const userData = response.data; // Assuming the response contains user data including roles
    return userData;
  } catch (error) {
    throw new Error('Error logging in');
  }
});

export const logout = () => {
  localStorage.removeItem('user');
  // You might want to dispatch an action to clear user data from Redux state here
};