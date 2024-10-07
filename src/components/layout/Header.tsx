import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import SearchDialog from "../specific/SearchDialog";
import NotificationDialog from "../specific/NotificationDialog";
import GroupDialog from "../specific/GroupDialog";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../utils/auth";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearChatReducer } from "../../store/slices/chatClice";
import { clearFriendRequestReducer } from "../../store/slices/friendRequestSlice";
import { clearUserReducer } from "../../store/slices/userSlice";
import { removeUserId } from "../../utils/localstorage-utils";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearchClick = () => {
    setIsSearch((pre) => !pre);
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

  const logutUser = async () => {
    logout();
    removeUserId();
    await dispatch(clearChatReducer());
    await dispatch(clearFriendRequestReducer());
    await dispatch(clearUserReducer());
    navigate("/login");
  };
  return (
    <>
      <div className="flex  justify-between bg-red-300 fixed w-screen z-50">
        <div className="m-5 cursor-pointer" onClick={redirectToHome}>
          Chat App
        </div>
        <div className="m-5">
          <span className="p-2 cursor-pointer" onClick={handleSearchClick}>
            <SearchIcon />
          </span>
          <span className="p-2 cursor-pointer" onClick={handleGroupClick}>
            <AddIcon />
          </span>
          <Link to="/groups" className="p-2 cursor-pointer">
            <GroupIcon />
          </Link>
          <span
            className="p-2 cursor-pointer"
            onClick={handleNotificationClick}
          >
            <NotificationsIcon />
          </span>
          <span className="p-2 cursor-pointer" onClick={logutUser}>
            <LogoutIcon />
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
