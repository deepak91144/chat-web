import { Input } from "@mui/material";
import CommonButton from "../UI/CommonButton";
import { useEffect, useState } from "react";
import { authenticate, isAuthenticated } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { login } from "../../API/auth";
import { storeUserId } from "../../utils/localstorage-utils";
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginFormValues, setLoginFormValues] = useState({
    userName: "",
    password: "",
  });
  const handleSubmit = async () => {
    if (loginFormValues.userName === "" || loginFormValues.password === "") {
      toast.error("Both fields are required");
      return;
    }
    const result = await login(loginFormValues);

    if (result.success) {
      authenticate(result.token);
      storeUserId(result.user._id);
      navigate("/");
    } else {
      toast.error(result?.message);
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
      <div className="flex flex-col w-[80%]">
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
