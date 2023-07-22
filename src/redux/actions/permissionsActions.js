import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// // create LenderOrg

// export const createLenderOrg = createAsyncThunk('lenderOrg/createLenderOrg', async (lenderOrgData) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/v1/admin/create-lender-org', lenderOrgData);
//     console.log('new orgs', response)
//     return response.data;
//   } catch (error) {
//     throw new Error('Error creating lender organization');
//   }
// });

// createAsyncThunk generates pending, fulfilled and rejected action types
// Define the async thunk for fetching all lender organizations
export const fetchPermissions = createAsyncThunk('permissions/fetchPermissions', async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/admin/permissions');
    console.log('all permissions', response)
    return response.data;
  } catch (error) {
    // Handle any error that occurred during the API call
    throw new Error('Error fetching permissions');
  }
});

// // Define the async thunk for fetching a lender organization by ID
// export const fetchLenderOrgById = createAsyncThunk('lenderOrg/fetchLenderOrgById', async (id) => {
//   // Check if id is provided before making the API call
//   try {
//     console.log('id', id);
//     const response = await axios.get(`http://localhost:5000/api/v1/admin/lender-org/${id}`);
//     console.log('resp org id', response.data);
//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching lender organization by ID');
//   }
// });


// // Add other CRUD actions (create, update, delete) here if needed.
// // For example, you can define createLenderOrg, updateLenderOrg, and deleteLenderOrg similarly.
