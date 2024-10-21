import { Link } from "react-router-dom";
import ProfileForMobile from "./ProfileForMobile";
import { white } from "../../constants/Colors";
import CloseIcon from "@mui/icons-material/Close";
const MobileMenuItem = ({ toggleDrawer }: any) => {
  return (
    <>
      <div className={`w-[100%] p-5 h-[100%] bg-blue-400 `}>
        <div>
          <ProfileForMobile />
        </div>
        <ul className="flex flex-col  items-center mt-5">
          <Link to="/groups" className={`text-xl text-[${white}]`}>
            My Groups
          </Link>
          <Link to="/chats" className={`text-xl text-[${white}] mt-5`}>
            My Chats
          </Link>
        </ul>
        <div className=" text-center mt-5 cursor-pointer">
          <span onClick={toggleDrawer}>
            <CloseIcon sx={{ color: white, width: 50, height: 50 }} />
          </span>
        </div>
      </div>
    </>
  );
};

export default MobileMenuItem;
