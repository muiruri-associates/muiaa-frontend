import { createAsyncThunk } from '@reduxjs/toolkit';
// import jwt from 'jsonwebtoken';
import axiosInstance from '../../app/api/api';

export const uploadDocument = createAsyncThunk('document/uploadDocument',async ({documentData, type}, { getState }) => {
    try {
      const accessToken = getState().auth.accessToken; // Replace with your actual access token
      // const user_id = getState().auth.user._id;
      const user_id = '6569e894d3bfbc68049f6d0d'
      // const decodedToken = jwt.decodedToken(accessToken);
      // if (!decodedToken || !decodedToken.user_id) {
      //   throw new Error('Invalid access token or user ID missing');
      // }
      // const user_id = decodedToken.user_id;
      // console.log('Decoded userId', user_id)


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

      const response = await axiosInstance.post('/v1/users/uploads', formData, config);
      const uploadedDocument = response.data;
      console.log('Uploaded document:', uploadedDocument);
      return uploadedDocument;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('Server error:', error.response.data);
            return rejectWithValue('Server error: ' + error.response.data.message);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Request made but no response received:', error.request);
            return rejectWithValue('No response from server');
          } else {
            // Something happened in setting up the request
            console.error('Error setting up the request:', error.message);
            return rejectWithValue('Request setup error: ' + error.message);
          }
    }
  }
);


export const getAllUserUploads = createAsyncThunk('document/getAllUserUploads', async(_, { getState }) => {
  try {
    // Get the access token from your state or wherever it's stored
    const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method
    const user_id = '6579f6b5d55168e208cda123'

    // Set the Authorization header with the access token
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    const response = await axiosInstance.get(`/v1/users/uploads/${user_id}`, config);
    const allUserUploads = response.data.body
    console.log('all available uloads', allUserUploads)
    return allUserUploads;
} catch (error) {
    // Handle any error that occurred during the API call
    console.error('error', error)
}
})