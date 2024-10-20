import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadFile } from "../../API/fileupload";

const initialState = {
  isLoading: false,
  files: [],
  isError: false,
};

export const uploadFileSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    clearFiles: (state, action) => {
      state.files = [];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadFiles.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(uploadFiles.fulfilled, (state: any, action) => {
      state.isLoading = false;
      state.files = [action.payload.file];
    });
    builder.addCase(uploadFiles.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
export const uploadFiles = createAsyncThunk(
  "uploadFiles",
  async (file: any) => {
    return uploadFile(file);
  }
);

export const { clearFiles, setLoading } = uploadFileSlice.actions;
export default uploadFileSlice.reducer;
