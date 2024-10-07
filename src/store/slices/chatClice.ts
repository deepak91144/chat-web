import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createAGroup,
  deleteGroup,
  fetchAllChats,
  getMyGroups,
  renameGroup,
} from "../../API/chat";

const initialState = {
  chats: [],
  groups: [],
  group: {},
  isLoading: false,
  isError: false,
};

export const fetchChats = createAsyncThunk("fetchChats", async () => {
  return fetchAllChats();
});
export const createGroup = createAsyncThunk("createGroup", async (payload) => {
  return createAGroup(payload);
});
export const myGroups = createAsyncThunk("myGroups", async () => {
  return getMyGroups();
});

export const changeGroupName = createAsyncThunk(
  "changeGroupName",
  async (payload) => {
    return renameGroup(payload);
  }
);
export const deleteAGroup = createAsyncThunk(
  "deleteAGroup",
  async (chatId: string) => {
    return deleteGroup(chatId);
  }
);

export const chatSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    selectedGroup: (state, action) => {
      state.group = action.payload;
    },
    clearGroup: (state, action) => {
      state.group = {};
    },
    clearChatReducer: (state, action) => {
      state.chats = [];
      state.groups = [];
      state.group = {};
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      console.log("action_", action);

      state.isLoading = false;
      state.chats = action.payload.chats;
    });
    builder.addCase(fetchChats.rejected, (state, action) => {
      state.isError = true;
    });

    // fetch my droups
    builder.addCase(myGroups.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(myGroups.fulfilled, (state, action) => {
      console.log("action_", action);

      state.isLoading = false;
      state.groups = action.payload.groups;
    });
    builder.addCase(myGroups.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
export const { selectedGroup, clearGroup, clearChatReducer } =
  chatSlice.actions;
export default chatSlice.reducer;
