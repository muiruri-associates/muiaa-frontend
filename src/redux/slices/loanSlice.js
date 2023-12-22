import { createSlice } from "@reduxjs/toolkit";
import { getAllLoanApplications, getLoanApplicationById } from "../actions/loanActions";

const initialState = {
  loan: {},
  loans: [],
  loading: false,
  error: null,
};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllLoanApplications.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllLoanApplications.fulfilled, (state, action) => {
      state.loading = false;
      state.loans = action.payload;
      state.error = "";
    });
    builder
      .addCase(getAllLoanApplications.rejected, (state, action) => {
        state.loading = false;
        state.loans = [];
        state.error = action.error.message;
      })
      .addCase(getLoanApplicationById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLoanApplicationById.fulfilled, (state, action) => {
        state.loading = false;
        state.loan = action.payload;
        state.error = "";
      })
      .addCase(getLoanApplicationById.rejected, (state, action) => {
        state.loading = false;
        state.loan = null;
        state.error = action.error.message;
      });
  },
});

export default loanSlice.reducer;
