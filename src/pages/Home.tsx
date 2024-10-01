import { useParams } from "react-router-dom";
import ChatList from "../components/chat/ChatList";
import AppLayout from "../components/layout/AppLayout";
import { sampleData } from "../constants/sampleData";
import Profile from "./Profile";

const Home = () => {
  const params = useParams();
  const chatId = params.chatId;
  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
    console.log("deleteChat", _id, groupChat);
  };
  return (
    <>
      <div className="min-h-[100vh] ">
        <div className="w-[25%]">
          <ChatList
            chats={sampleData}
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
