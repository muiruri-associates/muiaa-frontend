import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/apiSlice';
import authSliceReducer from '../redux/reducers/authSlice';
import lenderOrgReducer from '../redux/reducers/lenderSlice';
import permissionsReducer from '../redux/reducers/permissionsSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSliceReducer,
    lenderOrg: lenderOrgReducer,
    permissions: permissionsReducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(authApi.middleware),
});

export default store;