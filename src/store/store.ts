import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import chatSlice from "./slices/chatClice";
import friendRequestSlice from "./slices/friendRequestSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    chatReducer: chatSlice,
    friendRequestReducer: friendRequestSlice,
  },
});
