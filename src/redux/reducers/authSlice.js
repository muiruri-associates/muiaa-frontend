import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token:null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action)=> {
      state.user = action.payload.user;
      state.token= action.payload.token;
     
    },
    
    logOut : () =>{
      state.user = null;
      state.token = null;
    }
  },
});

export const { loginSuccess, logOut } = authSlice.actions;
export default authSlice.reducer;
export const loggedInUser= (state)=> state.auth.user;
export const loggedInUserToken= (state)=> state.auth.token;
