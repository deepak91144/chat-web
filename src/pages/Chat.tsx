import { useParams } from "react-router-dom";
import ChatList from "../components/chat/ChatList";
import AppLayout from "../components/layout/AppLayout";
import { sampleData } from "../constants/sampleData";
import Chatbox from "../components/chat/Chatbox";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const Chat = () => {
  const params = useParams();
  const {
    chatReducer: { chats },
  } = useSelector((store) => store);
  const chatId = params.chatId;
  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
    console.log("deleteChat", _id, groupChat);
  };
  return (
    <>
      <div className="w-screen h-screen">
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
          <div className="w-[25%] hidden">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout()(Chat);
