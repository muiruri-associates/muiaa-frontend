import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/apiSlice';
import authSliceReducer from '../redux/reducers/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(authApi.middleware),
});

export default store;