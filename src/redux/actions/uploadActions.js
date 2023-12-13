import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';

export const uploadDocument = createAsyncThunk('document/uploadDocument',async ({documentData, type}, { getState }) => {
    try {
      const accessToken = getState().auth.accessToken; // Replace with your actual access token
    //   const user_id = getState().auth.user._id;
      const user_id = "65610ffb2b7ff7ec9290f3df";


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
