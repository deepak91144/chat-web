import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { primary } from "../../constants/Colors";

const UserItem = (props: any) => {
  const {
    name,
    _id,
    avatar,
    handler,
    selectUser,
    friendRequestSent,
    addedAsFriend,
    friendRequestReceived,
    fiendRequestActionHandler,
    isMember,
  } = props;
  return (
    <>
      <div className="flex mt-5  relative items-center ">
        <Avatar src={avatar.url} />
        <div className="ml-2 capitalize ">{name}</div>

        {friendRequestSent ? (
          <>
            <div className="ml-5  absolute right-0 ">
              {" "}
              <Tooltip title="Request already sent">
                <IconButton sx={{ color: primary }}>
                  <DoneIcon />
                </IconButton>
              </Tooltip>
            </div>
          </>
        ) : addedAsFriend ? (
          <>
            <div className="ml-5  absolute right-0">
              <Tooltip title="Chat">
                <IconButton>
                  <ChatIcon sx={{ color: primary }} />
                </IconButton>
              </Tooltip>
            </div>
          </>
        ) : friendRequestReceived ? (
          <>
            <div className="ml-5 cursor-pointer absolute right-0">
              <span
                className="cursor-pointer "
                onClick={() => {
                  fiendRequestActionHandler(_id, true);
                }}
              >
                Accept
              </span>
              <span
                className="ml-2 cursor-pointer"
                onClick={() => {
                  fiendRequestActionHandler(_id, false);
                }}
              >
                Reject
              </span>
            </div>
          </>
        ) : (
          <>
            <span
              className="ml-5 cursor-pointer absolute right-0"
              onClick={() => {
                selectUser(_id);
              }}
            >
              <Tooltip title="Send friend request">
                <IconButton>
                  <AddIcon sx={{ color: primary }} />
                </IconButton>
              </Tooltip>
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default UserItem;
