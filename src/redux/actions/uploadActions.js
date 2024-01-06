import { createAsyncThunk } from '@reduxjs/toolkit';
// import jwt from 'jsonwebtoken';
import axiosInstance from '../../app/api/api';

export const uploadDocument = createAsyncThunk('document/uploadDocument',async ({documentData, type}, { getState }) => {
    try {
      const accessToken = getState().auth.accessToken; // Replace with your actual access token
      const user_id = getState().auth.user.id;

      // Set the Authorization header with the access token
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        }
      };

      const formData = new FormData();
      formData.append('type', type);
      formData.append('user_id', user_id);
      formData.append('file', documentData);

      const response = await axiosInstance.post('/users/uploads', formData, config);
      const uploadedDocument = response.data;
      console.log('Uploaded document:', uploadedDocument);
      return uploadedDocument;
    } catch (error) {
      console.error('error', error)
    }
  }
);


export const getAllUserUploads = createAsyncThunk('document/getAllUserUploads', async(_, { getState }) => {
  try {
    // Get the access token from your state or wherever it's stored
    const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method
    const user_id = getState().auth.user.id

    // Set the Authorization header with the access token
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    const response = await axiosInstance.get(`/users/uploads/${user_id}`, config);
    const allUserUploads = response.data.body
    console.log('all available uploads', allUserUploads)
    return allUserUploads;
  } catch (error) {
      // Handle any error that occurred during the API call
      console.error('error', error)
  }
})