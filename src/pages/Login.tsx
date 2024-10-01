import { Paper } from "@mui/material";
import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const toggleLoginSignupForm = () => {
    setShowLoginForm((pre) => !pre);
  };
  const handleSignupFormSubmit = (values: any) => {
    console.log(values);
  };
  const handleLoginFormSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <div className="w-screen h-screen bg-blue-300 flex justify-center items-center">
        <Paper
          elevation={5}
          style={{
            width: "25%",
            minHeight: "55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showLoginForm ? (
            <LoginForm handleLoginFormSubmit={handleLoginFormSubmit} />
          ) : (
            <SignupForm handleSignupFormSubmit={handleSignupFormSubmit} />
          )}

          <div className="mt-2">OR</div>
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
