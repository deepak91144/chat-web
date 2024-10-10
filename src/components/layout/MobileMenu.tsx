import { Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MobileMenuItem from "./MobileMenuItem";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SearchDialog from "../specific/SearchDialog";
import { Toaster } from "react-hot-toast";
import NotificationDialog from "../specific/NotificationDialog";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
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
  return (
    <>
      <div className="bg-red-400 flex fixed top-0 w-screen h-[3rem] items-center justify-between  z-40 p-5">
        <button
          onClick={() => {
            setOpenMenu(true);
          }}
          className=""
        >
          <MenuIcon />
        </button>
        <div className="text-2xl" onClick={takeToHome}>
          Chat APP
        </div>
        <div className="flex">
          <div className="mr-2" onClick={openNotificationDialog}>
            <NotificationsIcon />
          </div>
          <div onClick={openSearchDialog}>
            <SearchIcon />
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
