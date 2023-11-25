import { createSlice } from '@reduxjs/toolkit';
import { getLenderUsers, fetchLenderUserById, createLenderUser } from '../actions/lenderUserActions'

const initialState = {
    lenderUser: {},
    lenderUsers: [],
    loading: false,
    success: false,
    error: null,
};


const lenderUserSlice = createSlice({
    name: 'lenderUser',
    initialState,
    extraReducers: (builder) => {
        builder
        // getLenderUsers reducers
            .addCase(getLenderUsers.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = false;
            })
            .addCase(getLenderUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.lenderUsers = action.payload;
                state.success = true;
                state.error = false;
            })
            .addCase(getLenderUsers.rejected, (state, action) => {
                state.loading = false;
                state.lenderUsers = [];
                state.success = false;
                state.error = action.error.message;
            })
            // fetchLenderUserById reducers
            .addCase(fetchLenderUserById.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = false;
            })
            .addCase(fetchLenderUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.lenderUser = action.payload;
                state.success = true;
                state.error = false;
            })
            .addCase(fetchLenderUserById.rejected, (state, action) => {
                state.loading = false;
                state.lenderUser = null;
                state.success = false;
                state.error = action.error.message;
            })
            // createLenderUser reducers
            .addCase(createLenderUser.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = false;
            })
            .addCase(createLenderUser.fulfilled, (state, action) => {
                state.loading = false;
                state.lenderUser = action.payload;
                state.success = true;
                state.error = false;
            })
            .addCase(createLenderUser.rejected, (state, action) => {
                state.loading = false;
                state.lenderUser = null;
                state.success = false;
                state.error = action.error.message;
            });
    },
});

export default lenderUserSlice.reducer;