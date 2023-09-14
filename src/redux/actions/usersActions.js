import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';


// createAsyncThunk generates pending, fulfilled and rejected action types
// Define the async thunk for fetching all lender organizations
export const fetchUsers = createAsyncThunk('roles/fetchRoles', async () => {
  try {
    const response = await axiosInstance.get(`/v1/admin/users`);
    console.log('all users', response)
    return response.data;
  } catch (error) {
    // Handle any error that occurred during the API call
    throw new Error('Error fetching users');
  }
});

