import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';
import Cookies from 'js-cookie';


// createAsyncThunk generates pending, fulfilled and rejected action types
// Define the async thunk for fetching all lender organizations
export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    try {
        const accessToken = Cookies.get('accessToken'); // Replace with your actual access tok

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        const response = await axiosInstance.get(`/v1/admin/users`, config);
        console.log('all users>>>', response)
        return response.data.body;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching users');
    }
});