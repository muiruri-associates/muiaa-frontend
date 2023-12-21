import { createSlice } from '@reduxjs/toolkit';
import {getAllAvailableLeads} from '../actions/leadsActions'

const initialState = {
  lead: {},
  leads: [],
  loading: false,
  success: false,
  error: null,
};


const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllAvailableLeads.pending, state => {
      state.loading = true
    })
    builder.addCase(getAllAvailableLeads.fulfilled, (state, action) => {
      state.loading = false
      state.leads = action.payload
      state.success = true
      state.error = ''
    })
    builder.addCase(getAllAvailableLeads.rejected, (state, action) => {
      state.loading = false
      state.leads = []
      state.error = action.error.message
    })
    // .addCase(fetchleadsById.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(fetchleadsById.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.leads = action.payload;
    //   state.error = '';
    // })
    // .addCase(fetchleadsById.rejected, (state, action) => {
    //   state.loading = false;
    //   state.leads = null;
    //   state.error = action.error.message;
    // })
    // Add case for createleads.pending
    // .addCase(createleads.pending, (state) => {
    //   state.loading = true;
    // })

    // // Add case for createleads.fulfilled
    // .addCase(createleads.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.leads = action.payload;
    //   state.error = '';
    // })

    // // Add case for createleads.rejected
    // .addCase(createleads.rejected, (state, action) => {
    //   state.loading = false;
    //   state.leads = null;
    //   state.error = action.error.message;
    // });
  } 
})

export default leadsSlice.reducer


