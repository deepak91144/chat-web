import { useParams } from "react-router-dom";
import ChatList from "../components/chat/ChatList";
import AppLayout from "../components/layout/AppLayout";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllusers } from "../store/slices/userSlice";
import { getAccessToken } from "../utils/localstorage-utils";
import { addChat } from "../API/chat";
import { fetchChats } from "../store/slices/chatClice";

const Home = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const chatId = params.chatId;
  const {
    user: { users },
    chatReducer: { chats },
  } = useSelector((store) => store);
  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
    console.log("deleteChat", _id, groupChat);
  };

  const fetchMyChats = () => {
    dispatch(fetchChats());
  };
  useEffect(() => {
    fetchMyChats();
  }, []);

  return (
    <>
      <div className="min-h-[100vh] flex ">
        <div className="w-[25%]">
          <ChatList
            chats={chats}
            chatId={chatId}
            handleDeleteChat={handleDeleteChat}
          />
        </div>

        <div>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default AppLayout()(Home);
