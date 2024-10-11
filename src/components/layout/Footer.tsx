import moment from "moment";
import { primary, white } from "../../constants/Colors";

const Footer = () => {
  return (
    <>
      <div
        className={`bg-[${primary}] h-[5rem] text-[${white}] md:flex justify-center items-center  hidden`}
      >
        All rights reserved {moment().year()}
      </div>
    </>
  );
};

export default Footer;
