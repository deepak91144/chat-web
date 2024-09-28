import { Input, Paper } from "@mui/material";
import CommonButton from "../UI/CommonButton";

const LoginForm = () => {
  const handleSubmit = () => {};
  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input
          placeholder="Username"
          type="text"
          className="	border rounded-md "
        />
        <br />
        <Input
          placeholder="password"
          type="text"
          className="	border rounded-md h-[35px]"
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
