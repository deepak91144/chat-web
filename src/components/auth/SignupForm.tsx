import { Input } from "@mui/material";
import CommonButton from "../UI/CommonButton";
import personImage from "../../assets/images/personimage.png";
import { useRef, useState } from "react";
const SignupForm = ({ handleSignupFormSubmit }: any) => {
  const [signupFormValues, setSignupFormValues] = useState({
    userName: "",
    email: "",
    password: "",
    userPhoto: "",
  });
  const fileInputRef = useRef(null);
  const handleSubmit = () => {
    handleSignupFormSubmit(signupFormValues);
  };
  const handleOnChnage = (e: any) => {
    const { name, value } = e.target;
    setSignupFormValues((preValues) => {
      return { ...preValues, [name]: value };
    });
  };
  const handleFileChange = (e: any) => {
    console.log(e.target.files);
    const fileDetails = e.target.files[0];
    setSignupFormValues((preValues) => {
      return { ...preValues, userPhoto: fileDetails };
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="flex flex-col items-center text-gray-400 text-sm">
          <input
            type="file"
            name="userPhoto"
            onChange={handleFileChange}
            hidden
            ref={fileInputRef}
          />
          <img
            src={personImage}
            width={60}
            height={60}
            alt="person image"
            className="cursor-pointer "
            onClick={() => {
              fileInputRef.current.click();
            }}
          />
          <div>Upload Photo</div>
        </div>
        <Input
          placeholder="useName"
          name="userName"
          type="text"
          className="	border rounded-md mt-5 "
          onChange={handleOnChnage}
        />
        <br />
        <Input
          placeholder="Email"
          type="text"
          name="email"
          className="border rounded-md h-[35px]"
          onChange={handleOnChnage}
        />
        <br />
        <Input
          placeholder="Password"
          type="text"
          name="password"
          className="border rounded-md h-[35px]"
          onChange={handleOnChnage}
        />
        <br />

        <CommonButton
          text="Sign in"
          variant="contained"
          onClickAction={handleSubmit}
        />
      </div>
    </>
  );
};

export default SignupForm;
