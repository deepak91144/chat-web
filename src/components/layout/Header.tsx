import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import SearchDialog from "../specific/SearchDialog";
import NotificationDialog from "../specific/NotificationDialog";
import GroupDialog from "../specific/GroupDialog";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
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
    </>
  );
};

export default Header;
