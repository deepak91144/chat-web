import { Link } from "react-router-dom";
import ProfileForMobile from "./ProfileForMobile";

const MobileMenuItem = ({ widthValue }: any) => {
  return (
    <>
      <div className={`w-[${widthValue}] p-5`}>
        <div>
          <ProfileForMobile />
        </div>
        <ul className="flex flex-col  items-center mt-5">
          <Link to="/groups" className="text-xl">
            Groups
          </Link>
          {/* <Link to="/groups">Friends</Link> */}
        </ul>
      </div>
    </>
  );
};

export default MobileMenuItem;
