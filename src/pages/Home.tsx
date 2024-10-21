import { useParams } from "react-router-dom";
import ChatList from "../components/chat/ChatList";
import AppLayout from "../components/layout/AppLayout";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchChats } from "../store/slices/chatClice";
import { getUserId } from "../utils/localstorage-utils";
import Post from "./Post";

const Home = () => {
  const params = useParams();
  const [gotNewMessage, setGotNewMessage] = useState(false);
  const dispatch = useDispatch();
  const chatId = params.chatId;
  const userId = getUserId();
  const {
    chatReducer: { chats },
    messageReducer: { newMessageAlerts },
  } = useSelector((store: any) => store);
  const handleDeleteChat = (e: any, _id: any) => {
    e.preventDefault();
  };
  console.log("newMessageAlerts", newMessageAlerts);

  const fetchMyChats = () => {
    dispatch(fetchChats());
  };
  useEffect(() => {
    fetchMyChats();
  }, []);

  return (
    <>
      <div className=" min-h-[81vh] flex  ">
        <div
          className={`md:w-[30%] md:block hidden  w-[100%] md:pl-0 md:pr-0 pl-5 pr-5 `}
        >
          <ChatList
            chats={chats}
            newMessagesAlert={newMessageAlerts}
            chatId={chatId}
            handleDeleteChat={handleDeleteChat}
            userId={userId}
          />
        </div>
        <div className=" md:w-[50%] w-[100%] md:flex justify-center  md:ml-6 ">
          <Post />
        </div>

        <div className="md:block  hidden">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default AppLayout()(Home);
