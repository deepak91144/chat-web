import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useEffect, useState } from "react";
import SearchDialog from "../specific/SearchDialog";
import NotificationDialog from "../specific/NotificationDialog";
import GroupDialog from "../specific/GroupDialog";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../utils/auth";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  clearChatReducer,
  reArrangeTheChats,
} from "../../store/slices/chatClice";
import {
  clearFriendRequestReducer,
  myFriendRequest,
} from "../../store/slices/friendRequestSlice";
import { clearUserReducer } from "../../store/slices/userSlice";
import { getUserId, removeUserId } from "../../utils/localstorage-utils";
import { IconButton, Tooltip } from "@mui/material";
import { white } from "../../constants/Colors";
import CreatePostDialog from "../post/CreatePostDialog";
import * as io from "socket.io-client";
import { baseUrl } from "../../constants/serverConstants";
import { fetchPosts } from "../../store/slices/postSlice";
import { setNewMessageAlert } from "../../store/slices/messageSlice";
const socket = io.connect(baseUrl);

const Header = () => {
  const [gotNewMessage, setGotNewMessage] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [openPostDialog, setOpenPostDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = getUserId();
  const {
    friendRequestReducer: { friendRequests },
  } = useSelector((state: any) => state);
  const handleSearchClick = () => {
    setIsSearch((pre) => !pre);
  };
  const handleOpenPostDialog = () => {
    setOpenPostDialog((prev) => !prev);
  };
  const handleGroupClick = () => {
    setIsGroup((pre) => !pre);
  };
  const handleNotificationClick = () => {
    setIsNotification((pre) => !pre);
  };
  const redirectToHome = () => {
    navigate("/");
  };
  const fetchFrindRequests = async () => {
    const receiver = getUserId();
    await dispatch(myFriendRequest(receiver));
  };
  useEffect(() => {
    fetchFrindRequests();
  }, []);

  const logutUser = async () => {
    logout();
    removeUserId();
    await dispatch(clearChatReducer());
    await dispatch(clearFriendRequestReducer());
    await dispatch(clearUserReducer());
    navigate("/login");
  };

  useEffect(() => {
    socket.on("NEW_MESSAGE_ALERT", (payload: any) => {
      console.log("payload_", payload);
      if (payload.sender.toString() !== userId.toString()) {
        setGotNewMessage(true);
        toast.success("You have a new message");
        setTimeout(() => {
          setGotNewMessage(false);
        }, 500);
        dispatch(reArrangeTheChats(payload.chatId));
        dispatch(setNewMessageAlert(payload));
      }
    });

    socket.on("newPostAlert", () => {
      dispatch(fetchPosts());
    });
  }, []);
  return (
    <>
      <div className="md:flex  hidden justify-between bg-[#106DBE] items-center  fixed top-0 w-screen z-50">
        {/* Play new message alert */}
        {gotNewMessage && (
          <>
            <audio controls autoPlay hidden>
              <source
                src="https://bucketone0.s3.ap-south-1.amazonaws.com/short-beep-tone-47916.mp3"
                type="audio/ogg"
              />
            </audio>
          </>
        )}

        <div
          className="m-5 cursor-pointer text-[#FFFFFF] font-sans font-extrabold text-2xl  "
          onClick={redirectToHome}
        >
          Chat App
        </div>
        <div className="m-5">
          <span className=" cursor-pointer" onClick={handleSearchClick}>
            <Tooltip title="Search User">
              <IconButton>
                <SearchIcon sx={{ color: white }} />
              </IconButton>
            </Tooltip>
          </span>
          <span className=" cursor-pointer" onClick={handleGroupClick}>
            <Tooltip title="Create Group">
              <IconButton>
                <AddIcon sx={{ color: white }} />
              </IconButton>
            </Tooltip>
          </span>
          <Link to="/groups" className=" cursor-pointer">
            <Tooltip title="Groups">
              <IconButton>
                <GroupIcon sx={{ color: white }} />
              </IconButton>
            </Tooltip>
          </Link>
          <span className=" cursor-pointer  " onClick={handleNotificationClick}>
            <Tooltip title="Notification">
              <IconButton>
                {friendRequests?.length > 0 && (
                  <span className="absolute top-0 left-5  bg-red-400 rounded-full w-[20px] h-[20px] text-sm flex justify-center items-center  ">
                    {friendRequests?.length}
                  </span>
                )}

                <NotificationsIcon sx={{ color: white }} />
              </IconButton>
            </Tooltip>
          </span>
          <span className="cursor-pointer" onClick={handleOpenPostDialog}>
            <Tooltip title="Create Post">
              <IconButton>
                <PostAddIcon sx={{ color: white }} />
              </IconButton>
            </Tooltip>
          </span>
          <span className="p-2 cursor-pointer" onClick={logutUser}>
            <Tooltip title="Logout">
              <IconButton>
                <LogoutIcon sx={{ color: white }} />
              </IconButton>
            </Tooltip>
          </span>
        </div>
      </div>
      {isSearch && (
        <SearchDialog isSearch={isSearch} setIsSearch={setIsSearch} />
      )}
      {isNotification && (
        <NotificationDialog
          isNotification={isNotification}
          setIsNotification={setIsNotification}
        />
      )}
      {openPostDialog && (
        <CreatePostDialog
          openPostDialog={openPostDialog}
          setOpenPostDialog={setOpenPostDialog}
        />
      )}
      {isGroup && <GroupDialog isGroup={isGroup} setIsGroup={setIsGroup} />}

      {/* global toaster */}
      <Toaster
        toastOptions={{
          className: "",
          duration: 5000,
          success: {
            duration: 3000,
          },
        }}
      />
    </>
  );
};

export default Header;
