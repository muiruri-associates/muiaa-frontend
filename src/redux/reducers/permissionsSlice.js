import { createSlice } from '@reduxjs/toolkit';
import {fetchPermissions } from '../actions/permissionsActions'

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
      });
  },
  // extraReducers: builder => {
  //   builder.addCase(fetchPermissions.pending, state => {
  //     state.loading = true
  //   })
  //   builder.addCase(fetchPermissions.fulfilled, (state, action) => {
  //     state.loading = false
  //     state.permissions = action.payload
  //     state.error = ''
  //   })
  //   builder.addCase(fetchPermissions.rejected, (state, action) => {
  //     state.loading = false
  //     state.permissions = []
  //     state.error = action.error.message
  //   })
    // .addCase(fetchLenderOrgById.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(fetchLenderOrgById.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.lenderOrg = action.payload;
    //   state.error = '';
    // })
    // .addCase(fetchLenderOrgById.rejected, (state, action) => {
    //   state.loading = false;
    //   state.lenderOrg = null;
    //   state.error = action.error.message;
    // })
    // // Add case for createLenderOrg.pending
    // .addCase(createLenderOrg.pending, (state) => {
    //   state.loading = true;
    // })

    // // Add case for createLenderOrg.fulfilled
    // .addCase(createLenderOrg.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.lenderOrg = action.payload;
    //   state.error = '';
    // })

    // // Add case for createLenderOrg.rejected
    // .addCase(createLenderOrg.rejected, (state, action) => {
    //   state.loading = false;
    //   state.lenderOrg = null;
    //   state.error = action.error.message;
    // });
  // } 
})

export default permissionsSlice.reducer


