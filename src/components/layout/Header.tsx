import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import SearchDialog from "../specific/SearchDialog";
import NotificationDialog from "../specific/NotificationDialog";
import GroupDialog from "../specific/GroupDialog";
const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const handleSearchClick = () => {
    setIsSearch((pre) => !pre);
  };
  const handleGroupClick = () => {
    setIsGroup((pre) => !pre);
  };
  const handleNotificationClick = () => {
    setIsNotification((pre) => !pre);
  };
  return (
    <>
      <div className="flex justify-between bg-red-300">
        <div className="m-5">Chat App</div>
        <div className="m-5">
          <span className="p-2 cursor-pointer" onClick={handleSearchClick}>
            <SearchIcon />
          </span>
          <span className="p-2 cursor-pointer">
            <AddIcon />
          </span>
          <span className="p-2 cursor-pointer" onClick={handleGroupClick}>
            <GroupIcon />
          </span>
          <span
            className="p-2 cursor-pointer"
            onClick={handleNotificationClick}
          >
            <NotificationsIcon />
          </span>
        </div>
      </div>
      {isSearch && (
        <SearchDialog openDialog={isSearch} setIsSearch={setIsSearch} />
      )}
      {isNotification && <NotificationDialog />}
      {isGroup && <GroupDialog />}
    </>
  );
};

export default Header;
