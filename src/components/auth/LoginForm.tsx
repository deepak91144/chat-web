import { Input, Paper } from "@mui/material";
import CommonButton from "../UI/CommonButton";
import { useState } from "react";

const LoginForm = ({ handleLoginFormSubmit }: any) => {
  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    handleLoginFormSubmit(loginFormValues);
  };
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setLoginFormValues((preValues) => {
      return { ...preValues, [name]: value };
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
        <Input
          placeholder="Email"
          type="text"
          name="email"
          className="	border rounded-md "
          onChange={handleOnChange}
        />
        <br />
        <Input
          placeholder="password"
          type="text"
          name="password"
          className="	border rounded-md h-[35px]"
          onChange={handleOnChange}
        />
        <br />

        <CommonButton
          text="Login"
          variant="contained"
          onClickAction={handleSubmit}
        />
      </div>
    </>
  );
};

export default LoginForm;
