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
    setNewMessageAlert: (state: any, action) => {
      let isExist = false;
      const updatedAlerts = [...state.newMessageAlerts];
      updatedAlerts.forEach((ele) => {
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
    clearMessageAlertOfAChat: (state: any, action) => {
      const updatedAlerts = state.newMessageAlerts.filter((ele: any) => {
        if (ele.chatId !== action.payload) {
          return ele;
        }
      });
      state.newMessageAlerts = [...updatedAlerts];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessagesByChatId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMessagesByChatId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload.messages;
    });
    builder.addCase(fetchMessagesByChatId.rejected, (state) => {
      state.isError = true;
    });
  },
});
export const fetchMessagesByChatId: any = createAsyncThunk(
  "fetchMessagesByChatId",
  async (chatId: string) => {
    return fetchMessages(chatId);
  }
);

export const { setNewMessageAlert, clearMessageAlertOfAChat } =
  messageSlice.actions;
export default messageSlice.reducer;
