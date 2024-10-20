import ChatItem from "./ChatItem";

const ChatList = ({
  chats = [],
  chatId = "",
  onlineUsers = [],
  newMessagesAlert = [],
  handleDeleteChat,
  userId,
}: any) => {
  return (
    <>
      <div>
        {chats.length > 0 &&
          chats.map((chat: any, index: number) => {
            const { avatar, _id, name, groupChat, members } = chat;
            const newMessageAlert = newMessagesAlert.find(
              (ele: any) => ele.chatId === _id
            );
            const isOnline = members?.some((member: any) =>
              onlineUsers.includes(_id)
            );
            const sameSender = members?.some((member: any) =>
              member.includes(userId)
            );
            return (
              <>
                <ChatItem
                  newMessageAlert={newMessageAlert}
                  chat={chat}
                  isOnline={isOnline}
                  avatar={avatar}
                  selected={chatId.toString() === _id.toString()}
                  name={name}
                  _id={_id}
                  key={_id}
                  groupChat={groupChat}
                  sameSender={sameSender}
                  handleDeleteChat={handleDeleteChat}
                  index={index}
                />
              </>
            );
          })}
      </div>
    </>
  );
};

export default ChatList;
