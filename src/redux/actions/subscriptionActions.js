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