import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';


// create LenderOrg

export const createLenderUser = createAsyncThunk('lenderUser/createLenderUser', async(lenderUserData, { getState }) => {

    // Get the access token from your state or wherever it's stored
    // try {
        const accessToken = getState().auth.accessToken; // Retrieve the accessToken from your state
        console.log('Data lender user>>>', lenderUserData)

        if (!accessToken) {
            throw new Error('Access token not found!');
        }

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const response = await axiosInstance.post(
            'admin/lender-orgs/user/invites',
            lenderUserData,
            config
        );

        // Extract the invite object from the response body
        const { invite } = response.data.body;

        return invite; // Return the invite object
    // } catch (error) {
    //     // Handle errors
    //     throw error;
    // }


});

// createAsyncThunk generates pending, fulfilled and rejected action types
// Define the async thunk for fetching all lender users
export const getLenderUsers = createAsyncThunk('lenderUser/fetchLenderUsers', async() => {
    try {
        const response = await axiosInstance.get(`admin/lender-orgs/lender-users`);
        console.log('all lender users', response.data.body)
        return response.data.body;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching lender users');
    }
});

// Define the async thunk for fetching a lender user by ID
export const fetchLenderUserById = createAsyncThunk('lenderUser/fetchLenderUserById', async(id) => {
    // Check if id is provided before making the API call
    try {
        console.log('id', id);
        const response = await axiosInstance.get(`admin/lender-org/${id}`);
        console.log('resp org id', response.data);
        return response.data.body;
    } catch (error) {
        throw new Error('Error fetching lender user by ID');
    }
});


// Add other CRUD actions (create, update, delete) here if needed.