import ChatItem from "./ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId = "",
  onlineUsers = [],

  handleDeleteChat,
}: any) => {
  return (
    <>
      <div>
        {chats.length > 0 &&
          chats.map((chat: any, index: number) => {
            const {
              avatar,
              _id,
              name,
              groupChat,
              members,
              //  newMessagesAlert
            } = chat;
            // const newMessageAlert = newMessagesAlert.find(
            //   ({ chatId: any }) => chatId === _id
            // );
            const isOnline = members?.some((member: any) =>
              onlineUsers.includes(_id)
            );
            return (
              <>
                <ChatItem
                  // newMessageAlert={newMessageAlert}
                  isOnline={isOnline}
                  avatar={avatar}
                  selected={chatId.toString() === _id.toString()}
                  name={name}
                  _id={_id}
                  key={_id}
                  groupChat={groupChat}
                  sameSender={chatId === _id}
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
