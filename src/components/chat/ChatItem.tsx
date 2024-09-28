import { Avatar } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarCard from "../shared/AvatarCard";

const ChatItem = ({
  avatar,
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}: any) => {
  const navigate = useNavigate();
  const redirectToChat = () => {
    navigate(`/chat/${_id}`);
  };
  return (
    <>
      <div
        className="w-[50%] h-[80px] bg-blue-400 mt-2 flex items-center cursor-pointer "
        onClick={redirectToChat}
      >
        <AvatarCard avatar={avatar} />

        <span className="ml-2">{name}</span>
        <div className="ml-5">
          {newMessageAlert && newMessageAlert.count + " new Message"}
        </div>
        <div>
          {isOnline && (
            <>
              <span>Online</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatItem;
