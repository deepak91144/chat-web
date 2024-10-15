import { useParams } from "react-router-dom";
import ChatList from "../components/chat/ChatList";
import AppLayout from "../components/layout/AppLayout";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
  };

  const fetchMyChats = () => {
    dispatch(fetchChats());
  };
  useEffect(() => {
    fetchMyChats();
  }, []);

  return (
    <>
      <div className=" min-h-[81vh] flex ">
        <div className={`md:w-[25%]  w-[100%] md:pl-0 md:pr-0 pl-5 pr-5 `}>
          <ChatList
            chats={chats}
            chatId={chatId}
            handleDeleteChat={handleDeleteChat}
          />
        </div>

        <div className="md:block hidden">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default AppLayout()(Home);
