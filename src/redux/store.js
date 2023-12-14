import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './slices/authSlice';
import lenderOrgSliceReducer from './slices/lenderOrgSlice';
import permissionsSliceReducer from './slices/permissionsSlice';
import rolesSliceReducer from './slices/rolesSlice';
import usersSliceReducer from './slices/usersSlice';
import loanSliceReducer from './slices/loanSlice'
import lenderUserSliceReducer from './slices/lenderUserSlice';
import leadsSliceReducer from './slices/leadsSlice';
import uploadSliceReducer from './slices/uploadSlice';
import ticketSliceReducer from './slices/ticketSlice';

export const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        lenderOrg: lenderOrgSliceReducer,
        lenderUser: lenderUserSliceReducer,
        permissions: permissionsSliceReducer,
        roles: rolesSliceReducer,
        users: usersSliceReducer,
        loan: loanSliceReducer,
        leads: leadsSliceReducer,
        upload: uploadSliceReducer,
        ticket: ticketSliceReducer
    },
});

export default store;