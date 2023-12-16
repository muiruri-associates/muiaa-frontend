import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';

// createAsyncThunk generates pending, fulfilled and rejected action types
// Define the async thunk for fetching all loan applications
export const getAllLoanApplications = createAsyncThunk('loans/getAllLoanApplications', async () => {
  try {
    const response = await axiosInstance.get(`loans/loan-applications`);
    console.log('all loans', response)
    return response.data.body;
  } catch (error) {
    // Handle any error that occurred during the API call
    throw new Error('Error fetching all loans');
  }
});

// Define the async thunk for fetching a loan application by ID
export const getLoanApplicationById = createAsyncThunk('loans/getLoanApplicationById', async (id) => {
  // Check if id is provided before making the API call
  try {
    console.log('id', id);
    const response = await axiosInstance.get(`loan/loan-application/${id}`);
    console.log('resp loan id', response.data);
    return response.data.body;
  } catch (error) {
    throw new Error('Error fetching loan application by ID');
  }
});
