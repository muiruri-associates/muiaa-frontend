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
  localStorage.removeItem('userRole');
  localStorage.removeItem('user');
  // You might want to dispatch an action to clear user data from Redux state here
};

export const forgotPassword = createAsyncThunk('auth/forgot-password', async (email) => {
  try {
    const response = await axios.post('http://localhost:5000/api/v1/auth/forgot-password', { email });
console.log('response', response.data.status)
    if (response.data.status === "success") {
      return response.data; // You can return any relevant data from the response
    } else {
      throw new Error('Forgot password request failed');
    }
  } catch (error) {
    throw error; // Rethrow the error to be handled by Redux
  }
})

export const resetPassword = createAsyncThunk('auth/reset-password', async (resetData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/v1/auth/reset-password', resetData);
    console.log('response', response.data.status)
    if (response.data.status === "success") {
      return response.data; // You can return any relevant data from the response
    } else {
      throw new Error('Password reset request failed');
    }
  } catch (error) {
    throw error; // Rethrow the error to be handled by Redux
  }
});