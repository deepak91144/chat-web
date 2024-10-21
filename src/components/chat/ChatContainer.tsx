import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../utils/localstorage-utils";
import ChatList from "./ChatList";
import { useParams } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import { fetchChats } from "../../store/slices/chatClice";
import { useEffect } from "react";

const ChatContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const chatId = params.chatId;
  const userId = getUserId();
  const {
    chatReducer: { chats },
    messageReducer: { newMessageAlerts },
  } = useSelector((store: any) => store);

  const fetchMyChats = () => {
    dispatch(fetchChats());
  };
  useEffect(() => {
    fetchMyChats();
  }, []);

  const handleDeleteChat = () => {};
  return (
    <>
      <ChatList
        chats={chats}
        newMessagesAlert={newMessageAlerts}
        chatId={chatId}
        handleDeleteChat={handleDeleteChat}
        userId={userId}
      />
    </>
  );
};

export default AppLayout()(ChatContainer);
