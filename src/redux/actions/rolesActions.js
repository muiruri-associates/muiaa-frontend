import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';


// createAsyncThunk generates pending, fulfilled and rejected action types
// Define the async thunk for fetching all lender organizations
export const fetchRoles = createAsyncThunk('roles/fetchRoles', async(_, { getState }) => {
    try {
        const accessToken = getState().auth.accessToken; // Replace with your actual access tok

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        const response = await axiosInstance.get(`/v1/admin/roles`, config);
        console.log('all roles', response.data.body)
        return response.data.body.roles;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching roles');
    }
});

// // Add other CRUD actions (create, update, delete) here if needed.
// // For example, you can define createLenderOrg, updateLenderOrg, and deleteLenderOrg similarly.