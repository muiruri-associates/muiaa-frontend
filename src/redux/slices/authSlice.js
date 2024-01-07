  import { createSlice } from '@reduxjs/toolkit';
  import {
      login,
      forgotPassword,
      resetPassword,
      lenderRegister
  } from '../actions/authActions'
  import Cookies from 'js-cookie';

  const initialState = {
      user: {},
      userRole: '',
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      loading: false,
      success: false,
      error: null,
  };

  const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
        setTokens(state, action) {
            const { accessToken, refreshToken } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.isAuthenticated = true;
      
            Cookies.set('accessToken', accessToken, { expires: 7 }); // Set cookie with expiration
            Cookies.set('refreshToken', refreshToken, { expires: 7 }); // Set cookie with expiration
        },
        clearTokens(state) {
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
      
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
        },
      },
      extraReducers: (builder) => {
          builder
              .addCase(login.pending, state => {
                  state.loading = true
              })
              .addCase(login.fulfilled, (state, action) => {
                  state.loading = false
                  const { accessToken, refreshToken } = action.payload
                      // Set tokens in state
                  state.accessToken = accessToken;
                  state.refreshToken = refreshToken;
                  state.isAuthenticated = true;

                  // Other user data handling as needed
                  state.user = action.payload.body.user;
                  state.userRole = action.payload.body.user.role;
                  console.log('accesstoken and refreshtoken', action.payload.accessToken, action.payload.refreshToken)
                  console.log('UserRole', action.payload.body.user.role)
                  localStorage.setItem('userRole', JSON.stringify(action.payload.body.user.role));
                  localStorage.setItem('user', JSON.stringify(action.payload.body.user));
                  // Set tokens in cookies
                  Cookies.set('accessToken', accessToken, { expires: 7 });
                  Cookies.set('refreshToken', refreshToken, { expires: 7 });
                  state.error = ''
              })
              .addCase(login.rejected, (state, action) => {
                  state.loading = false
                  state.user = {}
                  state.error = action.error.message
              })
              .addCase(lenderRegister.pending, (state) => {
                  state.loading = true;
                  state.success = false;
                  state.error = null;
              })
              .addCase(lenderRegister.fulfilled, (state, action) => {
                  state.loading = false;
                  state.user = action.payload;
                  state.success = true;
                  state.error = null;
              })
              .addCase(lenderRegister.rejected, (state, action) => {
                  state.loading = false;
                  state.success = false;
                  state.error = action.error.message;
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
                  state.error = action.error.message || 'Forgot password failed';
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
  });

  // export const { setAccessToken } = authSlice.actions; // Exporting the setAccessToken action


export const { setTokens, clearTokens } = authSlice.actions;
export default authSlice.reducer