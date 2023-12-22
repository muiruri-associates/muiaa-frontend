import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../app/api/api";

// create Permission

export const createPermissions = createAsyncThunk(
  "lenderOrg/createPermissions",
  async (permissionsData) => {
    try {
      const response = await axiosInstance.post(`admin/permissions`, permissionsData);
      console.log("new permissions>>", response);
      return response.data;
    } catch (error) {
      throw new Error("Error creating permission");
    }
  }
);

// createAsyncThunk generates pending, fulfilled and rejected action types
// Define the async thunk for fetching all lender organizations
export const fetchPermissions = createAsyncThunk(
  "permissions/fetchPermissions",
  async (_, { getState }) => {
    try {
      const accessToken = getState().auth.accessToken; // Replace with your actual access tok

      // Set the Authorization header with the access token
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axiosInstance.get(`admin/permissions`, config);
      console.log("all permissions", response);
      return response.data.body;
    } catch (error) {
      // Handle any error that occurred during the API call
      throw new Error("Error fetching permissions");
    }
  }
);

// // Define the async thunk for fetching a lender organization by ID
// export const fetchLenderOrgById = createAsyncThunk('lenderOrg/fetchLenderOrgById', async (id) => {
//   // Check if id is provided before making the API call
//   try {
//     console.log('id', id);
//     const response = await axios.get(`${process.env.REACT_APP_PRODUCTION}v1/admin/lender-org/${id}`);
//     console.log('resp org id', response.data);
//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching lender organization by ID');
//   }
// });

// // Add other CRUD actions (create, update, delete) here if needed.
// // For example, you can define createPermissions, updateLenderOrg, and deleteLenderOrg similarly.
