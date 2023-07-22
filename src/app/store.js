import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/apiSlice';
import authSliceReducer from '../redux/reducers/authSlice';
import lenderOrgReducer from '../redux/reducers/lenderSlice';
import permissionsReducer from '../redux/reducers/permissionsSlice';
import rolesReducer from '../redux/reducers/rolesSlice';
import usersReducer from '../redux/reducers/usersSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSliceReducer,
    lenderOrg: lenderOrgReducer,
    permissions: permissionsReducer,
    roles: rolesReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(authApi.middleware),
});

export default store;