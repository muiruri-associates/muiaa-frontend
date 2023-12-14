import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';


// create ticket

export const createTicket = createAsyncThunk('ticket/createTicket', async(ticketData, { getState }) => {
    try {
        const accessToken = getState().auth.accessToken; // Replace with your actual access token
        const createdBy = "65610ffa2b7ff7ec9290f3dc";

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        const tokenDataWithId = {
            ...ticketData,
            createdBy
        }

        const response = await axiosInstance.post(`/v1/users/tickets`, tokenDataWithId, config);
        const newTicket = response.data;
        console.log('new ticket >>>', newTicket)
        return newTicket;
    } catch (error) {
        throw new Error('Error creating Ticket');
    }
});

// createAsyncThunk generates pending, fulfilled and rejected action types
// Define the async thunk for fetching all lender organizations
export const fetchData = createAsyncThunk('ticket/fetchticket', async(_, { getState }) => {
    try {
        // Get the access token from your state or wherever it's stored
        const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        const response = await axiosInstance.get(`/v1/admin/lender-orgs`, config);
        console.log('all orgs', response.data.body)
        return response.data.body;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching lender organizations');
    }
});

// Define the async thunk for fetching a lender organization by ID
export const fetchticketById = createAsyncThunk('ticket/fetchticketById', async(id, { getState }) => {
    // Check if id is provided before making the API call
    try {
        const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        console.log('id', id);
        const response = await axiosInstance.get(`/v1/admin/lender-org/${id}`, config);
        console.log('resp org id', response.data);
        return response.data.body;
    } catch (error) {
        throw new Error('Error fetching lender organization by ID');
    }
});


// Add other CRUD actions (create, update, delete) here if needed.
// For example, you can define createTicket, updateticket, and deleteticket similarly.