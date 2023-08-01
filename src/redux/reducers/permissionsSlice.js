import { createSlice } from '@reduxjs/toolkit';
import { fetchPermissions, createPermissions } from '../actions/permissionsActions'; 

const initialState = {
  permissions: [],
  loading: false,
  error: null,
};

const permissionsSlice = createSlice({
  name: 'permission',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPermissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPermissions.fulfilled, (state, action) => {
        state.loading = false;
        state.permissions = action.payload;
        state.error = null;
      })
      .addCase(fetchPermissions.rejected, (state, action) => {
        state.loading = false;
        state.permissions = [];
        state.error = action.error.message;
      })
      .addCase(createPermissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPermissions.fulfilled, (state, action) => {
        state.loading = false;
        state.permission = action.payload;
        state.error = '';
      })
      .addCase(createPermissions.rejected, (state, action) => {
        state.loading = false;
        state.permission = null;
        state.error = action.error.message;
      });
  },
});

export default permissionsSlice.reducer;
