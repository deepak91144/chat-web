import { Input } from "@mui/material";
import CommonButton from "../UI/CommonButton";
import { useEffect, useState } from "react";
import { authenticate, isAuthenticated } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { login } from "../../API/auth";
import { storeUserId } from "../../utils/localstorage-utils";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginFormValues, setLoginFormValues] = useState({
    userName: "",
    password: "",
  });
  const handleSubmit = async () => {
    const result = await login(loginFormValues);
    if (result) {
      authenticate(result.token);
      storeUserId(result.user._id);
      navigate("/");
    }
  };
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setLoginFormValues((preValues) => {
      return { ...preValues, [name]: value };
    });
  };
  useEffect(() => {
    if (isAuthenticated()) navigate("/");
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input
          placeholder="Username"
          type="text"
          name="userName"
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
