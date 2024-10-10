import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addMembersToAGroup,
  createAGroup,
  deleteGroup,
  fetchAllChats,
  getGroupDetails,
  getMyGroups,
  removeMembersFromAGroup,
  renameGroup,
} from "../../API/chat";

const initialState = {
  chats: [],
  groups: [],
  group: {},
  isLoading: false,
  isError: false,
  message: "",
};

export const chatSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
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
      state.isLoading = false;
      state.groups = action.payload.groups;
    });
    builder.addCase(myGroups.rejected, (state, action) => {
      state.isError = true;
    });
    // remove member from group
    builder.addCase(removeMembersFromGroup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeMembersFromGroup.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(removeMembersFromGroup.rejected, (state, action) => {
      state.isError = true;
    });

    // get group details
    builder.addCase(groupDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(groupDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.group = action.payload.group;
    });
    builder.addCase(groupDetails.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

// extra reducer functions
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

export const addMembersToGroup = createAsyncThunk(
  "addMembersToGroup",
  async (payload) => {
    return addMembersToAGroup(payload);
  }
);

export const removeMembersFromGroup = createAsyncThunk(
  "removeMembersFromGroup",
  async (payload) => {
    return removeMembersFromAGroup(payload);
  }
);

export const groupDetails = createAsyncThunk("groupDetails", async (chatId) => {
  return getGroupDetails(chatId);
});

export const { clearGroup, clearChatReducer } = chatSlice.actions;
export default chatSlice.reducer;
