import { Link } from "react-router-dom";
import ProfileForMobile from "./ProfileForMobile";
import { white } from "../../constants/Colors";

const MobileMenuItem = ({ widthValue }: any) => {
  return (
    <>
      <div className={`w-[${widthValue}] p-5 h-[100%] bg-blue-400`}>
        <div>
          <ProfileForMobile />
        </div>
        <ul className="flex flex-col  items-center mt-5">
          <Link to="/groups" className={`text-xl text-[${white}]`}>
            Groups
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MobileMenuItem;
