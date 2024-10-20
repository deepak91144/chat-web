import { useParams } from "react-router-dom";
import ChatList from "../components/chat/ChatList";
import AppLayout from "../components/layout/AppLayout";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchChats, reArrangeTheChats } from "../store/slices/chatClice";
import { getUserId } from "../utils/localstorage-utils";
import { setNewMessageAlert } from "../store/slices/messageSlice";
import io from "socket.io-client";
import Post from "./Post";
import { fetchPosts } from "../store/slices/postSlice";

const socket = io.connect("http://localhost:8000");
const Home = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const chatId = params.chatId;
  const userId = getUserId();
  const {
    user: { users },
    chatReducer: { chats },
    messageReducer: { messages, newMessageAlerts },
  } = useSelector((store) => store);
  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
  };
  console.log("newMessageAlerts", newMessageAlerts);

  const fetchMyChats = () => {
    dispatch(fetchChats());
  };
  useEffect(() => {
    fetchMyChats();
  }, []);
  useEffect(() => {
    socket.on("NEW_MESSAGE_ALERT", (payload: any) => {
      console.log("payload_", payload);
      dispatch(reArrangeTheChats(payload.chatId));
      dispatch(setNewMessageAlert(payload));
    });

    socket.on("newPostAlert", (payload: any) => {
      dispatch(fetchPosts());
    });
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
