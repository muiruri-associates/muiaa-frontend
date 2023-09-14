import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../app/api/apiSlice';
import authSliceReducer from './slices/authSlice';
import lenderOrgReducer from './slices/lenderOrgSlice';
import permissionsReducer from './slices/permissionsSlice';
import rolesReducer from './slices/rolesSlice';
import usersReducer from './slices/usersSlice';
import loanReducer from './slices/loanSlice'

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    lenderOrg: lenderOrgReducer,
    permissions: permissionsReducer,
    roles: rolesReducer,
    users: usersReducer,
    loan: loanReducer
  },
});

export default store;