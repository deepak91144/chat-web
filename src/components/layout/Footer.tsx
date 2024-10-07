import moment from "moment";

const Footer = () => {
  return (
    <>
      <div className="bg-red-300 h-[5rem] flex justify-center items-center ">
        All rights reserved {moment().year()}
      </div>
    </>
  );
};

export default Footer;
