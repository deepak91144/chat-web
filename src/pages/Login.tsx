import { Paper } from "@mui/material";
import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const toggleLoginSignupForm = () => {
    setShowLoginForm((pre) => !pre);
  };
  return (
    <>
      <div className="w-screen h-screen bg-blue-300 flex justify-center items-center">
        <Paper
          elevation={5}
          style={{
            width: "40%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showLoginForm ? <LoginForm /> : <SignupForm />}
          <br />
          <div>OR</div>
          <p
            className="text-blue-300 cursor-pointer"
            onClick={toggleLoginSignupForm}
          >
            {showLoginForm ? "Signup" : "Login"} Instead
          </p>
        </Paper>
      </div>
    </>
  );
};

export default Login;
