import { Paper } from "@mui/material";
import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import { addNewUser } from "../API/auth";
import { authenticate } from "../utils/auth";
import { storeUserId } from "../utils/localstorage-utils";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const navigate = useNavigate();
  const toggleLoginSignupForm = () => {
    setShowLoginForm((pre) => !pre);
  };

  const handleSubmit = async (signupFormValues: any) => {
    const res = await addNewUser(signupFormValues);
    if (res) {
      authenticate(res.token);
      storeUserId(res.user._id);
      navigate("/");
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-blue-300 flex justify-center items-center">
        <Paper
          elevation={5}
          style={{
            width: isMobile ? "80%" : "25%",
            minHeight: "55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showLoginForm ? (
            <LoginForm />
          ) : (
            <SignupForm handleSubmit={handleSubmit} />
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

      <Toaster
        toastOptions={{
          className: "",
          duration: 5000,
          success: {
            duration: 3000,
          },
        }}
      />
    </>
  );
};

export default Login;
