import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';


// create LenderOrg

export const createLenderUser = createAsyncThunk('lenderOrg/createLenderUser', async (lenderUserData) => {
  try {
    const response = await axiosInstance.post(`/v1/admin/lender-orgs/add-user`, lenderUserData);
    console.log('new lender user', response)
    return response.data.body;
  } catch (error) {
    throw new Error('Error creating lender user');
  }
});

// createAsyncThunk generates pending, fulfilled and rejected action types
// Define the async thunk for fetching all lender users
export const getLenderUsers = createAsyncThunk('lenderOrg/fetchLenderUsers', async () => {
  try {
    const response = await axiosInstance.get(`/v1/admin/lender-orgs/lender-users`);
    console.log('all lender users', response.data.body)
    return response.data.body;
  } catch (error) {
    // Handle any error that occurred during the API call
    throw new Error('Error fetching lender users');
  }
});

// Define the async thunk for fetching a lender user by ID
export const fetchLenderUserById = createAsyncThunk('lenderOrg/fetchLenderUserById', async (id) => {
  // Check if id is provided before making the API call
  try {
    console.log('id', id);
    const response = await axiosInstance.get(`/v1/admin/lender-org/${id}`);
    console.log('resp org id', response.data);
    return response.data.body;
  } catch (error) {
    throw new Error('Error fetching lender user by ID');
  }
});


// Add other CRUD actions (create, update, delete) here if needed.