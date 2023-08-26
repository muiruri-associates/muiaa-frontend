import { createSlice } from '@reduxjs/toolkit';
import {login, forgotPassword, resetPassword} from '../actions/authActions'

const initialState = {
  user: null,
  loading: false,
  success: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, state => {
      state.loading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload;
      console.log('UserRole', action.payload.user)
      localStorage.setItem('userRole', JSON.stringify(action.payload.user.roles[0]));
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      state.error = ''
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false
      state.user = {}
      state.error = action.error.message
    })
    .addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    .addCase(forgotPassword.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    })
    .addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.error.message;
    })
    .addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    .addCase(resetPassword.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    })
    .addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.error.message;
    });
  }
})

export default authSlice.reducer