import { IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AvatarCard from "../shared/AvatarCard";
import { white } from "../../constants/Colors";
import GroupIcon from "@mui/icons-material/Group";
import { useDispatch } from "react-redux";
import { setChatDetails } from "../../store/slices/chatClice";
const ChatItem = ({
  avatar,
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  selected,
  chat,
}: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectToChat = () => {
    dispatch(setChatDetails(chat));
    navigate(`/chat/${_id}`);
  };
  return (
    <>
      <div
        className={`w-[100%]  ${
          index === 0 ? "md:mt-[1rem] mt-[4.5rem]" : "mt-2"
        } ${
          selected ? "bg-green-950" : "bg-blue-400 "
        }    flex items-center cursor-pointer relative rounded-[8px] p-2`}
        onClick={redirectToChat}
      >
        <AvatarCard avatar={avatar} />

        <span
          className={`ml-2 capitalize  ${
            selected ? "text-white" : `text-[${white}]`
          }`}
        >
          {name}
        </span>
        <div className="ml-5">
          {newMessageAlert &&
            sameSender &&
            newMessageAlert.count + " new Message"}
        </div>
        <div>
          {isOnline && (
            <>
              <span>Online</span>
            </>
          )}
        </div>
        {groupChat && (
          <>
            <div className="absolute right-2">
              <Tooltip title="Group Chat">
                <IconButton>
                  <GroupIcon sx={{ color: white }} />
                </IconButton>
              </Tooltip>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatItem;
