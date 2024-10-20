import { useParams } from "react-router-dom";
import ChatList from "../components/chat/ChatList";
import AppLayout from "../components/layout/AppLayout";
import Chatbox from "../components/chat/Chatbox";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const Chat = () => {
  const params = useParams();
  const {
    chatReducer: { chats },
  } = useSelector((store: any) => store);
  const chatId = params.chatId;
  const handleDeleteChat = (e: any, _id: any, groupChat: any) => {
    e.preventDefault();
    console.log("deleteChat", _id, groupChat);
  };
  return (
    <>
      <div className="w-screen ">
        <div className="flex ">
          <div className="w-[30%] hidden pr-2">
            <ChatList
              chats={chats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </div>
          <div className="md:w-[60%] w-[100%]">
            <Chatbox />
          </div>
          <div className="w-[25%] md:block hidden">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout()(Chat);
