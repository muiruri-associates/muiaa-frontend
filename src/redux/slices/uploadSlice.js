import { createSlice } from '@reduxjs/toolkit';
import { uploadDocument } from '../actions/uploadActions';

const initialState = {
  document: null,
  documents: [],
  loading: false,
  success: false,
  error: null,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  extraReducers: (builder) => {
      builder
      .addCase(uploadDocument.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.document = action.payload.documentUpload;
        state.success = true;
        state.error = '';
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        state.loading = false;
        state.document = null;
        state.error = action.error.message;
      });
    //   .addCase(fetchData.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchData.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.documents = action.payload;
    //     state.error = '';
    //   })
    //   .addCase(fetchData.rejected, (state, action) => {
    //     state.loading = false;
    //     state.documents = [];
    //     state.error = action.error.message;
    //   })
    //   .addCase(fetchDocumentById.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchDocumentById.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.document = action.payload;
    //     state.error = '';
    //   })
    //   .addCase(fetchDocumentById.rejected, (state, action) => {
    //     state.loading = false;
    //     state.document = null;
    //     state.error = action.error.message;
    //   })
  },
});

export default uploadSlice.reducer;
