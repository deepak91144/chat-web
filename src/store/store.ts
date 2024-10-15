import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import chatSlice from "./slices/chatClice";
import friendRequestSlice from "./slices/friendRequestSlice";
import messageSlice from "./slices/messageSlice";
import uploadFileSlice from "./slices/uploadFileSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    chatReducer: chatSlice,
    friendRequestReducer: friendRequestSlice,
    messageReducer: messageSlice,
    fileReducer: uploadFileSlice,
  },
});
