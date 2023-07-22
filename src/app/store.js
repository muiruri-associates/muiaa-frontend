import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/apiSlice';
import authSliceReducer from '../redux/reducers/authSlice';
import lenderOrgReducer from '../redux/reducers/lenderSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSliceReducer,
    lenderOrg: lenderOrgReducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(authApi.middleware),
});

export default store;