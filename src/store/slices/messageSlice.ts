import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMessages } from "../../API/message";

const initialState = {
  isLoading: false,
  messages: [],
  isError: false,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
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

export const {} = messageSlice.actions;
export default messageSlice.reducer;
