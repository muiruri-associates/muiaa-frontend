import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';


// create LenderOrg

// export const createLenderOrg = createAsyncThunk('lenderOrg/createLenderOrg', async(lenderOrgData, { getState }) => {
//     try {
//         const accessToken = getState().auth.accessToken; // Replace with your actual access tok

//         // Set the Authorization header with the access token
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         };
//         const response = await axiosInstance.post(`/admin/lender-orgs`, lenderOrgData, config);
//         console.log('new orgs>>>', response)
//         return response.data.body;
//     } catch (error) {
//         throw new Error('Error creating lender organization');
//     }
// });


// todo: Add user id from auth state
// Define the async thunk for fetching all leads organizations
export const getAllAvailableLeads = createAsyncThunk('leads/getAllAvailableLeads', async(lender_id, { getState }) => {
    try {
        // Get the access token from your state or wherever it's stored
        const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        const response = await axiosInstance.get(`/lenders/${lender_id}/available-leads`, config);
        const allAvailableLeads = response.data.body
        console.log('all available leads', allAvailableLeads)
        return allAvailableLeads;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching lender organizations');
    }
});

// Define the async thunk for fetching a lender organization by ID
export const fetchLenderOrgById = createAsyncThunk('lenderOrg/fetchLenderOrgById', async(id, { getState }) => {
    // Check if id is provided before making the API call
    try {
        const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        console.log('id', id);
        const response = await axiosInstance.get(`/admin/lender-org/${id}`, config);
        console.log('resp org id', response.data);
        return response.data.body;
    } catch (error) {
        throw new Error('Error fetching lender organization by ID');
    }
});


// Add other CRUD actions (create, update, delete) here if needed.
// For example, you can define createLenderOrg, updateLenderOrg, and deleteLenderOrg similarly.