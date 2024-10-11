import { Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import MobileMenuItem from "./MobileMenuItem";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SearchDialog from "../specific/SearchDialog";
import { Toaster } from "react-hot-toast";
import NotificationDialog from "../specific/NotificationDialog";
import GroupDialog from "../specific/GroupDialog";
import { white } from "../../constants/Colors";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

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
  const openCreateGroupDialog = () => {
    setIsGroup(true);
  };
  return (
    <>
      <div className="bg-[#106DBE] flex md:hidden fixed top-0 w-screen h-[3rem] items-center justify-between  z-40 p-5">
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

          <div className="mr-2 cursor-pointer" onClick={openNotificationDialog}>
            <NotificationsIcon sx={{ color: white }} />
          </div>
          <div onClick={openSearchDialog} className="cursor-pointer ">
            <SearchIcon sx={{ color: white }} />
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

      <Toaster
        toastOptions={{
          className: "",
          duration: 5000,
          success: {
            duration: 3000,
          },
        }}
      />

      <Drawer open={openMenu} onClose={toggleDrawer}>
        <MobileMenuItem widthValue="200px" />
      </Drawer>
    </>
  );
};

export default MobileMenu;
