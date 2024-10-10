import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  acceptFriendRequest,
  fetchAllMyFriends,
  fetchMyFriendRequest,
  fiendRequestIHaveSent,
  sendFriendRequest,
} from "../../API/friendRequest";

const initialState = {
  friendRequests: [],
  friendRequestSenderIds: [],
  friendRequestISent: [],
  friendRequestISent_receiverIds: [],
  friends: [],
  friendIds: [],
  isLoading: false,
  isError: false,
};

export const friendRequestSlice = createSlice({
  name: "friendRequest",
  initialState,
  reducers: {
    clearFriendRequestReducer: (state, action) => {
      state.friendRequests = [];
      state.friendRequestISent = [];
      state.friendRequestISent_receiverIds = [];
      state.friends = [];
      state.friendIds = [];
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    // my friend request
    builder.addCase(myFriendRequest.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(myFriendRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.friendRequests = action.payload.friendRequests;
      state.friendRequestSenderIds = action.payload.friendRequestSenderIds;
    });
    builder.addCase(myFriendRequest.rejected, (state, action) => {
      state.isError = true;
    });

    // friend request i have sent
    builder.addCase(friendRequestISent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(friendRequestISent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.friendRequestISent = action.payload.friendRequests;
      state.friendRequestISent_receiverIds = action.payload.receiverIds;
    });
    builder.addCase(friendRequestISent.rejected, (state, action) => {
      state.isError = true;
    });

    // get my friends
    builder.addCase(fetchMyFriends.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMyFriends.fulfilled, (state, action) => {
      state.isLoading = false;
      state.friends = action.payload.friendsList;
      state.friendIds = action.payload.friendIds;
    });
    builder.addCase(fetchMyFriends.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const friendRequest = createAsyncThunk(
  "friendRequest",
  async (payload) => {
    return sendFriendRequest(payload);
  }
);

export const friendRequestISent = createAsyncThunk(
  "friendRequestISent",
  async (userId: string) => {
    return fiendRequestIHaveSent(userId);
  }
);

export const myFriendRequest = createAsyncThunk(
  "myFriendRequest",
  async (receiver: string) => {
    return fetchMyFriendRequest(receiver);
  }
);

export const acceptMyFriendRequest = createAsyncThunk(
  "myFriendRequest",
  async (payload) => {
    return acceptFriendRequest(payload);
  }
);

export const fetchMyFriends = createAsyncThunk(
  "fetchMyFriends",
  async (userId: string) => {
    return fetchAllMyFriends(userId);
  }
);

export const { clearFriendRequestReducer } = friendRequestSlice.actions;
export default friendRequestSlice.reducer;
