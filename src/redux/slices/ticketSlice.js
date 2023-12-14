import { createSlice } from '@reduxjs/toolkit';
import {createTicket} from '../actions/ticketActions'

const initialState = {
  ticket: {},
  tickets: [],
  loading: false,
  success: false,
  error: null,
};


const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  extraReducers: builder => {
    builder
        // Add case for createticket.pending
        .addCase(createTicket.pending, (state) => {
            state.loading = true;
        })
        // Add case for createticket.fulfilled
        .addCase(createTicket.fulfilled, (state, action) => {
            state.loading = false;
            state.ticket = action.payload;
            state.error = '';
        })
        // Add case for createticket.rejected
        .addCase(createTicket.rejected, (state, action) => {
            state.loading = false;
            state.ticket = null;
            state.error = action.error.message;
        })
        // .addCase(fetchData.pending, state => {
        // state.loading = true
        // })
        // .addCase(fetchData.fulfilled, (state, action) => {
        // state.loading = false
        // state.tickets = action.payload
        // state.error = ''
        // })
        // .addCase(fetchData.rejected, (state, action) => {
        // state.loading = false
        // state.tickets = []
        // state.error = action.error.message
        // })
        // .addCase(fetchticketById.pending, (state) => {
        // state.loading = true;
        // })
        // .addCase(fetchticketById.fulfilled, (state, action) => {
        // state.loading = false;
        // state.ticket = action.payload;
        // state.error = '';
        // })
        // .addCase(fetchticketById.rejected, (state, action) => {
        // state.loading = false;
        // state.ticket = null;
        // state.error = action.error.message;
        // })
    } 
    })

export default ticketSlice.reducer


