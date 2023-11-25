import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';

export const login = createAsyncThunk('auth/login', async(loginData) => {
    try {
        const response = await axiosInstance.post(`/v1/auth/login`, loginData);
        const userData = response.data; // Assuming the response contains user data including roles
        console.log('data>>>', userData)
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


export const lenderRegister = createAsyncThunk('auth/lenderRegister', async(registerData) => {
    try {
        const response = await axiosInstance.post(`/v1/lenders/register`, registerData);
        if (response.statusCode === 200) {
            const { data, message } = response.data.body;
            console.log('reg data>>>>', response.data.body)
            return { userData: data, message }; // Returning relevant data from the response
        } else {
            throw new Error('Registration failed');
        }
    } catch (error) {
        throw error; // Rethrow the error to be handled by Redux
    }
});


export const forgotPassword = createAsyncThunk('auth/forgot-password', async(email) => {
    try {
        const response = await axiosInstance.post(`/v1/auth/forgot-password`, { email });
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

export const resetPassword = createAsyncThunk('auth/reset-password', async(resetData) => {
    try {
        const response = await axiosInstance.post(`/v1/auth/reset-password`, resetData);
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