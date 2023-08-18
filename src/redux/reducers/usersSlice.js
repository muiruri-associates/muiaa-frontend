import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/usersActions";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      })
      // Add case for createRole.pending
      // .addCase(createRole.pending, (state) => {
      //   state.loading = true;
      // })

      // // Add case for createRole.fulfilled
      // .addCase(createRole.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.role = action.payload;
      //   state.error = "";
      // })

      // // Add case for createRole.rejected
      // .addCase(createRole.rejected, (state, action) => {
      //   state.loading = false;
      //   state.role = null;
      //   state.error = action.error.message;
      // });
  },
});

export default usersSlice.reducer;
