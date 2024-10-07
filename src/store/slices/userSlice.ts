import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../API/auth";

const initialState = {
  isLoading: false,
  users: [],
  isError: false,
};

export const fetchAllusers = createAsyncThunk(
  "fetchAllusers",
  async (token: string) => {
    return getAllUsers(token);
  }
);
export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clearUserReducer: (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllusers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllusers.fulfilled, (state, action) => {
      console.log("action_", action);

      state.isLoading = false;
      state.users = action.payload.users;
    });
    builder.addCase(fetchAllusers.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const { clearUserReducer } = userSlice.actions;
export default userSlice.reducer;
