import { createSlice } from '@reduxjs/toolkit';
import {getLenderUsers, fetchLenderUserById, createLenderUser} from '../actions/lenderUserActions'

const initialState = {
  lenderUser: {},
  lenderUsers: [],
  loading: false,
  error: null,
};


const lenderUserSlice = createSlice({
  name: 'lenderUser',
  initialState,
  extraReducers: builder => {
    builder.addCase(getLenderUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(getLenderUsers.fulfilled, (state, action) => {
      state.loading = false
      state.lenderUsers = action.payload
      state.error = ''
    })
    builder.addCase(getLenderUsers.rejected, (state, action) => {
      state.loading = false
      state.lenderUsers = []
      state.error = action.error.message
    })
    .addCase(fetchLenderUserById.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchLenderUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.lenderUser = action.payload;
      state.error = '';
    })
    .addCase(fetchLenderUserById.rejected, (state, action) => {
      state.loading = false;
      state.lenderUser = null;
      state.error = action.error.message;
    })
    // Add case for createLenderUser.pending
    .addCase(createLenderUser.pending, (state) => {
      state.loading = true;
    })

    // Add case for createLenderUser.fulfilled
    .addCase(createLenderUser.fulfilled, (state, action) => {
      state.loading = false;
      state.lenderUser = action.payload;
      state.error = '';
    })

    // Add case for createLenderUser.rejected
    .addCase(createLenderUser.rejected, (state, action) => {
      state.loading = false;
      state.lenderUser = null;
      state.error = action.error.message;
    });
  } 
})

export default lenderUserSlice.reducer


