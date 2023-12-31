import { createSlice } from "@reduxjs/toolkit";
import {
  createTicket,
  getAllUserTickets,
  getAllTickets,
  sendMessage,
  getTicketById,
  updateTicket,
  deleteTicket,
} from "../actions/ticketActions";

const initialState = {
  ticket: {},
  tickets: [],
  messages: [],
  title: '',
  loading: false,
  success: false,
  error: null,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.ticket = action.payload;
        state.success = true;
        state.error = "";
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.loading = false;
        state.ticket = null;
        state.error = action.error.message;
      })
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.ticket = action.payload;
        state.success = true;
        state.error = "";
        state.messages = action.payload.body.ticket.messages;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.ticket = null;
        state.error = action.error.message;
      })
      .addCase(getAllUserTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUserTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
        state.success = true;
        state.error = "";
      })
      .addCase(getAllUserTickets.rejected, (state, action) => {
        state.loading = false;
        state.tickets = [];
        state.error = action.error.message;
      })
      .addCase(getAllTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
        state.success = true;
        state.error = "";
      })
      .addCase(getAllTickets.rejected, (state, action) => {
        state.loading = false;
        state.tickets = [];
        state.error = action.error.message;
      })
      .addCase(getTicketById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTicketById.fulfilled, (state, action) => {
        state.loading = false;
        state.ticket = action.payload.ticket; // Update the ticket data if needed
        state.title = action.payload.ticket.title; 
        console.log('messges on slice', state.ticket.messages)
  
        // Assuming messages are under response.data.body.ticket.messages
        if (action.payload && action.payload && action.payload.ticket) {
          const { messages } = action.payload.ticket;
          console.log('message on slice', messages)
          state.messages = messages ? messages : [];
        } else {
          state.messages = [];
        }
        state.error = "";
      })
      .addCase(getTicketById.rejected, (state, action) => {
        state.loading = false;
        state.ticket = null;
        state.error = action.error.message;
      })
      .addCase(updateTicket.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.ticket = action.payload;
        state.error = "";
      })
      .addCase(deleteTicket.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.ticket = action.payload;
        state.success = true;
        state.error = "";
      })
      .addCase(deleteTicket.rejected, (state, action) => {
        state.loading = false;
        state.ticket = null;
        state.error = action.error.message;
      });
  },
});

export default ticketSlice.reducer;
