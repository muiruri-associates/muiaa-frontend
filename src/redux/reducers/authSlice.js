import { createSlice } from '@reduxjs/toolkit';
import {login} from '../actions/authActions'

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload;
      console.log('UserRole', action.payload.user.roles[0])
      localStorage.setItem('userRole', JSON.stringify(action.payload.user.roles[0]));
      state.error = ''
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.user = {}
      state.error = action.error.message
    })
  }
})

export default authSlice.reducer