import { createSlice } from "@reduxjs/toolkit";
import { fetchRoles } from "../actions/rolesActions";

const initialState = {
  roles: [],
  loading: false,
  error: null,
};

const rolesSlice = createSlice({
  name: "role",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
        state.error = null;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.loading = false;
        state.roles = [];
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

export default rolesSlice.reducer;
