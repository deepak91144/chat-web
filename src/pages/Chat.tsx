import { useParams } from "react-router-dom";
import ChatList from "../components/chat/ChatList";
import AppLayout from "../components/layout/AppLayout";
import { sampleData } from "../constants/sampleData";

const Chat = () => {
  const params = useParams();
  const chatId = params.chatId;
  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
    console.log("deleteChat", _id, groupChat);
  };
  return (
    <>
      <div className="w-screen h-screen">
        <ChatList
          chats={sampleData}
          chatId={chatId}
          handleDeleteChat={handleDeleteChat}
        />
      </div>
    </>
  );
};

export default AppLayout()(Chat);
