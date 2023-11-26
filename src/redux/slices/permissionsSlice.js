import { createSlice } from '@reduxjs/toolkit';
import { fetchPermissions, createPermissions } from '../actions/permissionsActions';

const initialState = {
    permissions: [],
    loading: false,
    success: false,
    error: false,
};

const permissionsSlice = createSlice({
    name: 'permissions',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPermissions.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = false;
            })
            .addCase(fetchPermissions.fulfilled, (state, action) => {
                state.loading = false;
                state.permissions = action.payload;
                state.success = true;
                state.error = false;
            })
            .addCase(fetchPermissions.rejected, (state, action) => {
                state.loading = false;
                state.permissions = [];
                state.success = false;
                state.error = action.error.message;
            })
            .addCase(createPermissions.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = false;
            })
            .addCase(createPermissions.fulfilled, (state, action) => {
                state.loading = false;
                state.permission = action.payload;
                state.success = true;
                state.error = false;
            })
            .addCase(createPermissions.rejected, (state, action) => {
                state.loading = false;
                state.permission = null;
                state.success = false;
                state.error = action.error.message;
            });
    },
});

export default permissionsSlice.reducer;