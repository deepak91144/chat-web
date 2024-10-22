import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import MobileMenuItem from "./MobileMenuItem";
import { useNavigate, useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SearchDialog from "../specific/SearchDialog";
import { Toaster } from "react-hot-toast";
import NotificationDialog from "../specific/NotificationDialog";
import GroupDialog from "../specific/GroupDialog";
import { white } from "../../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../utils/localstorage-utils";
import { myFriendRequest } from "../../store/slices/friendRequestSlice";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CreatePostDialog from "../post/CreatePostDialog";
import * as io from "socket.io-client";
import { baseUrl } from "../../constants/serverConstants";
import { reArrangeTheChats } from "../../store/slices/chatClice";
import { setNewMessageAlert } from "../../store/slices/messageSlice";
import { fetchPosts } from "../../store/slices/postSlice";
const socket = io.connect(baseUrl);

const MobileMenu = () => {
  const [gotNewMessage, setGotNewMessage] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMessagePage, setIsMessagePage] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [openPostDialog, setOpenPostDialog] = useState(false);
  const userId = getUserId();
  const dispatch = useDispatch();
  const params = useParams();
  const {
    friendRequestReducer: { friendRequests },
  } = useSelector((state: any) => state);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpenMenu(false);
  };

  const takeToHome = () => {
    navigate("/");
  };
  const openSearchDialog = () => {
    setIsSearch(true);
  };
  const openNotificationDialog = () => {
    setIsNotification(true);
  };
  const handleOpenPostDialog = () => {
    setOpenPostDialog(true);
  };
  const openCreateGroupDialog = () => {
    setIsGroup(true);
  };
  const fetchFrindRequests = async () => {
    const receiver = getUserId();
    await dispatch(myFriendRequest(receiver));
  };
  useEffect(() => {
    fetchFrindRequests();
    console.log("params", params);
  }, []);
  useEffect(() => {
    if (params.chatId) {
      setIsMessagePage(true);
    }
  }, [params]);
  useEffect(() => {
    socket.on("NEW_MESSAGE_ALERT", (payload: any) => {
      if (payload.sender.toString() !== userId.toString() && !isMessagePage) {
        console.log("payload_", payload);
        setGotNewMessage(true);
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
      <div className="bg-[#106DBE] flex md:hidden fixed top-0 w-screen h-[4rem] items-center justify-between  z-40 p-5">
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
        <button
          onClick={() => {
            setOpenMenu(true);
          }}
          className=""
        >
          <MenuIcon sx={{ color: white }} />
        </button>
        <div
          className={`text-2xl cursor-pointer text-white font-extrabold  `}
          onClick={takeToHome}
        >
          Chat APP
        </div>
        <div className="flex">
          <div className="mr-2 cursor-pointer" onClick={openCreateGroupDialog}>
            <AddIcon sx={{ color: white }} />
          </div>

          <div
            className="mr-2 cursor-pointer relative"
            onClick={openNotificationDialog}
          >
            {friendRequests?.length > 0 && (
              <span className="absolute top-0 left-2  bg-red-400 rounded-full w-[20px] h-[20px] text-sm flex justify-center items-center  ">
                {friendRequests?.length}
              </span>
            )}
            <NotificationsIcon sx={{ color: white }} />
          </div>
          <div onClick={openSearchDialog} className="cursor-pointer ">
            <SearchIcon sx={{ color: white }} />
          </div>
          <div className="cursor-pointer ml-2" onClick={handleOpenPostDialog}>
            <PostAddIcon sx={{ color: white }} />
          </div>
        </div>
      </div>
      {isSearch && (
        <>
          <SearchDialog isSearch={isSearch} setIsSearch={setIsSearch} />
        </>
      )}
      {isNotification && (
        <NotificationDialog
          isNotification={isNotification}
          setIsNotification={setIsNotification}
        />
      )}
      {isGroup && <GroupDialog isGroup={isGroup} setIsGroup={setIsGroup} />}
      {openPostDialog && (
        <CreatePostDialog
          openPostDialog={openPostDialog}
          setOpenPostDialog={setOpenPostDialog}
        />
      )}

      <Toaster
        toastOptions={{
          className: "",
          duration: 5000,
          success: {
            duration: 3000,
          },
        }}
      />

      <Drawer
        open={openMenu}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: "100%" },
        }}
      >
        <MobileMenuItem toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};

export default MobileMenu;
