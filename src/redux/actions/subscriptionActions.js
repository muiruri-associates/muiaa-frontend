import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/api/api';


// create subscription

export const createSubscription = createAsyncThunk('subscription/createSubscription', async(subscriptionData, { getState }) => {
    try {
        const accessToken = getState().auth.accessToken;
        const userId = getState().auth.user._id;
        const plan = localStorage.getItem('plan');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        
        const subscriptionDataWithUserId = {
            ...subscriptionData,
            userId,
            plan
        }

        const response = await axiosInstance.post(`/lenders/subscribe`, subscriptionDataWithUserId, config);
        const newsubscription = response.data;
        console.log('new subscription >>>', newsubscription)
        return newsubscription;
    } catch (error) {
        throw new Error('Error creating subscription');
    }
});

// Get All Subscriptions
export const getAllSubscriptions = createAsyncThunk('lenders/getAllSubscriptions', async(_, { getState }) => {
    try {
        // Get the access token from your state or wherever it's stored
        const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        const response = await axiosInstance.get(`/admin/subscriptions`, config);
        const subscriptions = response.data.body
        console.log('all subscriptions>>>>', subscriptions);
        return subscriptions;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching Subscriptions');
    }
});

// Get Subscription By ID
export const getSubscriptionById = createAsyncThunk('lenders/getSubscriptionById', async(id, { getState }) => {
    try {
        const accessToken = getState().auth.accessToken; // Replace with your actual access token retrieval method

        // Set the Authorization header with the access token
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        console.log('id', id);
        const response = await axiosInstance.get(`/admin/subscriptions/${id}`, config);
        console.log('resp org id', response.data);
        return response.data.body;
    } catch (error) {
        throw new Error('Error fetching lender organization by ID');
    }
})