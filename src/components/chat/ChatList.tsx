import ChatItem from "./ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],

  handleDeleteChat,
}: any) => {
  return (
    <>
      <div>
        {chats.map((chat: any, index: number) => {
          const { avatar, _id, name, groupChat, members, newMessagesAlert } =
            chat;
          const newMessageAlert = newMessagesAlert.find(
            ({ chatId: any }) => chatId === _id
          );
          const isOnline = members?.some((member: any) =>
            onlineUsers.includes(_id)
          );
          return (
            <>
              <ChatItem
                newMessageAlert={newMessageAlert}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
                _id={_id}
                key={_id}
                groupChat={groupChat}
                sameSender={chatId === _id}
                handleDeleteChat={handleDeleteChat}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ChatList;
