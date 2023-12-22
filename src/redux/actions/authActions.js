import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';

// Action Types
const AUTH = 'auth';
const LENDER_REGISTER = 'lenderRegister';
const FORGOT_PASSWORD = 'forgotPassword';
const RESET_PASSWORD = 'resetPassword';

// Action Creators
const authActions = {
  loginSuccess: (userData) => ({ type: `${AUTH}/loginSuccess`, payload: userData }),
  loginFailure: (error) => ({ type: `${AUTH}/loginFailure`, payload: error }),
  logout: () => ({ type: `${AUTH}/logout` }),
};

const lenderRegisterActions = {
  success: (userData) => ({ type: `${LENDER_REGISTER}/success`, payload: userData }),
  failure: (error) => ({ type: `${LENDER_REGISTER}/failure`, payload: error }),
};

const forgotPasswordActions = {
  success: (message) => ({ type: `${FORGOT_PASSWORD}/success`, payload: message }),
  failure: (error) => ({ type: `${FORGOT_PASSWORD}/failure`, payload: 'Forgot password failed' + error }),
};

const resetPasswordActions = {
  success: (message) => ({ type: `${RESET_PASSWORD}/success`, payload: message }),
  failure: (error) => ({ type: `${RESET_PASSWORD}/failure`, payload: 'Password reset failed' + error }),
};

// Async Thunks
export const login = createAsyncThunk(`${AUTH}/login`, async (loginData) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, loginData);
    const userData = response.data;
    return authActions.loginSuccess(userData);
  } catch (error) {
    return authActions.loginFailure('Error logging in');
  }
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('userRole');
  localStorage.removeItem('user');
  dispatch(authActions.logout());
};

export const lenderRegister = createAsyncThunk(`${LENDER_REGISTER}/register`, async (registerData) => {
  try {
    const response = await axiosInstance.post(`/v1/lenders/register`, registerData);
    const userData = response.data;
    return lenderRegisterActions.success(userData);
  } catch (error) {
    throw lenderRegisterActions.failure(error); 
  }
});

export const forgotPassword = createAsyncThunk(
  `${FORGOT_PASSWORD}/forgotPassword`,
  async (email) => {
    try {
      const response = await axiosInstance.post(`/auth/forgot-password`, { email });
      const message = response.data.body.message;
      return forgotPasswordActions.success(message);
    } catch (error) {
      throw forgotPasswordActions.failure(error); 
    }
  }
);

export const resetPassword = createAsyncThunk(
  `${RESET_PASSWORD}/resetPassword`,
  async (resetData) => {
    try {
      const response = await axiosInstance.post(`/auth/reset-password`, resetData);
      const message = response.data.body.message;
      return resetPasswordActions.success(message);
    } catch (error) {
      throw resetPasswordActions.failure(error); 
    }
  }
);
