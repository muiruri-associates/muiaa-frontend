import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';
import Cookies from 'js-cookie';


// create ticket

export const createTicket = createAsyncThunk('ticket/createTicket', async(ticketData) => {
    try {
        const accessToken = Cookies.get('accessToken'); // Replace with your actual access token
        const createdBy = "65610ffa2b7ff7ec9290f3dc";

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        const ticketDataWithId = {
            ...ticketData,
            createdBy
        }

        const response = await axiosInstance.post(`/users/tickets`, ticketDataWithId, config);
        const newTicket = response.data;
        console.log('new ticket >>>', newTicket)
        return newTicket;
    } catch (error) {
        throw new Error('Error creating Ticket');
    }
});

// send message to ticket
export const sendMessage = createAsyncThunk('ticket/sendMessage', async({ticketData, ticket_id}) => {
    try {
        // const accessToken = getState().auth.accessToken; // Replace with your actual access token
        const accessToken = Cookies.get('accessToken');
        const sender = getState().auth.user.id;

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        const ticketDataWithId = {
            ...ticketData,
            sender
        }

        const response = await axiosInstance.post(`/users/tickets/${ticket_id}/messages`, ticketDataWithId, config);
        const ticketMessage = response.data;
        console.log('send message to ticket >>>', ticketMessage)
        return ticketMessage;
    } catch (error) {
        throw new Error('Error creating Ticket');
    }
});


// Get All Tickets
export const getAllTickets = createAsyncThunk('ticket/getAllTickets', async(_) => {
    try {
        // Get the access token from your state or wherever it's stored
        const accessToken = Cookies.get('accessToken');

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        const response = await axiosInstance.get(`/users/tickets`, config);
        const userTickets = response.data.body.tickets
        console.log('All tickets for a user>>', userTickets)
        return userTickets;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching user tickets', error.message);
    }
});

// Get All User Tickets
export const getAllUserTickets = createAsyncThunk('ticket/getAllUserTickets', async() => {
    try {
        // Get the access token from your state or wherever it's stored // Replace with your actual access token retrieval method
        const accessToken = Cookies.get('accessToken');
        const user_id = "65610ffa2b7ff7ec9290f3dc";

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        const response = await axiosInstance.get(`/users/tickets/user/${user_id}`, config);
        const userTickets = response.data.body.tickets
        console.log('All tickets for a user>>', userTickets)
        return userTickets;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching user tickets', error.message);
    }
});

// Define the async thunk for fetching a lender organization by ID
export const getTicketById = createAsyncThunk('ticket/getTicketById', async(_id) => {
    // Check if id is provided before making the API call
    try {
        // const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method
        const accessToken = Cookies.get('accessToken');

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        console.log('Ticket id>>', _id);
        const response = await axiosInstance.get(`/users/tickets/${_id}`, config);
        const ticketById = response.data.body
        console.log('Geting ticket by id', ticketById);
        return ticketById;
    } catch (error) {
        throw new Error('Error fetching lender organizationticket by ID');
    }
});


// Update ticket
export const updateTicket = createAsyncThunk('ticket/updateTicket', async ({ ticket_id, updatedData }) => {
    try {
        // const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method
        const accessToken = Cookies.get('accessToken');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        const response = await axiosInstance.put(`/users/tickets/${ticket_id}`, updatedData, config);
        const updatedTicket = response.data;
        console.log('Updated ticket:', updatedTicket);
        return updatedTicket;
    } catch (error) {
        throw new Error('Error updating ticket');
    }
});


// Delete ticket
export const deleteTicket = createAsyncThunk('ticket/deleteTicket', async (ticket_id) => {
    try {
        const accessToken = Cookies.get('accessToken'); // Replace with your actual access token retrieval method

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        const response = await axiosInstance.delete(`/users/tickets/${ticket_id}`, config);
        const deletedTicket = response.data;
        console.log('Deleted ticket:', deletedTicket);
        return ticket_id;
    } catch (error) {
        throw new Error('Error deleting ticket');
    }
});
