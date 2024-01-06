import { createSlice } from "@reduxjs/toolkit";
import {
  createSubscription,
  getAllSubscriptions
} from "../actions/subscriptionActions";

const initialState = {
  subscription: {},
  subscriptions: [],
  loading: false,
  success: false,
  error: null,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createSubscription.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.subscription = action.payload;
        state.success = true;
        state.error = "";
      })
      .addCase(createSubscription.rejected, (state, action) => {
        state.loading = false;
        state.subscription = null;
        state.error = action.error.message;
      })
      builder.addCase(getAllSubscriptions.pending, state => {
        state.loading = true
      })
      builder.addCase(getAllSubscriptions.fulfilled, (state, action) => {
        state.loading = false
        state.subscriptions = action.payload
        state.error = ''
      })
      builder.addCase(getAllSubscriptions.rejected, (state, action) => {
        state.loading = false
        state.subscriptions = []
        state.error = action.error.message
      })
    },
});

export default subscriptionSlice.reducer;