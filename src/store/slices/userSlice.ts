import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getProfileDetails,
  updateUserDetails,
} from "../../API/auth";

const initialState = {
  isLoading: false,
  users: [],
  isError: false,
  profile: {},
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clearUserReducer: (state) => {
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

    // fetch profile details
    builder.addCase(fetchProfileDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfileDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload.user;
    });
    builder.addCase(fetchProfileDetails.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
export const fetchAllusers = createAsyncThunk(
  "fetchAllusers",
  async (token: string) => {
    return getAllUsers(token);
  }
);
export const fetchProfileDetails = createAsyncThunk(
  "fetchProfileDetails",
  async (token: string) => {
    return getProfileDetails(token);
  }
);
export const updateUser = createAsyncThunk(
  "updateUser",
  async (payload: any) => {
    return updateUserDetails(payload);
  }
);

export const { clearUserReducer } = userSlice.actions;
export default userSlice.reducer;
