import { createSlice } from '@reduxjs/toolkit';
import {fetchData, fetchLenderOrgById, createLenderOrg} from '../actions/lenderOrgActions'

const initialState = {
  lenderOrg: {},
  lenderOrgs: [],
  loading: false,
  error: null,
};


const lenderOrgSlice = createSlice({
  name: 'lenderOrg',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false
      state.lenderOrgs = action.payload
      state.error = ''
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false
      state.lenderOrgs = []
      state.error = action.error.message
    })
    .addCase(fetchLenderOrgById.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchLenderOrgById.fulfilled, (state, action) => {
      state.loading = false;
      state.lenderOrg = action.payload;
      state.error = '';
    })
    .addCase(fetchLenderOrgById.rejected, (state, action) => {
      state.loading = false;
      state.lenderOrg = null;
      state.error = action.error.message;
    })
    // Add case for createLenderOrg.pending
    .addCase(createLenderOrg.pending, (state) => {
      state.loading = true;
    })

    // Add case for createLenderOrg.fulfilled
    .addCase(createLenderOrg.fulfilled, (state, action) => {
      state.loading = false;
      state.lenderOrg = action.payload;
      state.error = '';
    })

    // Add case for createLenderOrg.rejected
    .addCase(createLenderOrg.rejected, (state, action) => {
      state.loading = false;
      state.lenderOrg = null;
      state.error = action.error.message;
    });
  } 
})

export default lenderOrgSlice.reducer


