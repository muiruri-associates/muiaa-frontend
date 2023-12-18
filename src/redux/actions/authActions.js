import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';

export const login = createAsyncThunk('auth/login', async(loginData) => {
    // try {
        const response = await axiosInstance.post(`/auth/login`, loginData);
        const userData = response.data; // Assuming the response contains user data including roles
        console.log('data>>>', userData)
        return userData;
    // } catch (error) {
    //     throw new Error('Error logging in', error.message);
    // }
});

export const logout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('user');
    // You might want to dispatch an action to clear user data from Redux state here
};


export const lenderRegister = createAsyncThunk('auth/lenderRegister', async(registerData) => {
    try {
        const response = await axiosInstance.post(`/v1/lenders/register`, registerData);
        const userData = response.data;
        return userData
    } catch (error) {
        throw error; // Rethrow the error to be handled by Redux
    }
});


export const forgotPassword = createAsyncThunk('auth/forgot-password', async(email) => {
    try {
        const response = await axiosInstance.post(`/v1/auth/forgot-password`, { email });
        const message = response.data.body.message
        console.log('response', response.data.statusCode)
        console.log('message>>', message)
        return message;
    } catch (error) {
        throw error; // Rethrow the error to be handled by Redux
    }
})

export const resetPassword = createAsyncThunk('auth/reset-password', async(resetData) => {
    try {
        const response = await axiosInstance.post(`/v1/auth/reset-password`, resetData);
        const message = response.data.body.message
        console.log('response>>', response)
        console.log('Status>>', message)
        return message;
    } catch (error) {
        throw error; // Rethrow the error to be handled by Redux
    }
});