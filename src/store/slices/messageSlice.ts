import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMessages } from "../../API/message";

const initialState = {
  isLoading: false,
  messages: [],
  isError: false,
  newMessageAlerts: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setNewMessageAlert: (state, action) => {
      let isExist = false;
      const updatedAlerts = [...state.newMessageAlerts];
      updatedAlerts.forEach((ele, index) => {
        if (action.payload.chatId.toString() === ele.chatId.toString()) {
          ele.count = ele.count + 1;
          isExist = true;
        }
      });
      if (!isExist) {
        state.newMessageAlerts = [...state.newMessageAlerts, action.payload];
      } else {
        state.newMessageAlerts = [...updatedAlerts];
      }
    },
    clearMessageAlertOfAChat: (state, action) => {
      const updatedAlerts = state.newMessageAlerts.filter((ele, index) => {
        if (ele.chatId !== action.payload) {
          return ele;
        }
      });
      state.newMessageAlerts = [...updatedAlerts];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessagesByChatId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMessagesByChatId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload.messages;
    });
    builder.addCase(fetchMessagesByChatId.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
export const fetchMessagesByChatId = createAsyncThunk(
  "fetchMessagesByChatId",
  async (chatId: string) => {
    return fetchMessages(chatId);
  }
);

export const { setNewMessageAlert, clearMessageAlertOfAChat } =
  messageSlice.actions;
export default messageSlice.reducer;
