import { Input, Paper } from "@mui/material";
import CommonButton from "../UI/CommonButton";

const SignupForm = () => {
  const handleSubmit = () => {};
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input placeholder="name" type="text" className="	border rounded-md " />
        <br />
        <Input
          placeholder="Bio"
          type="text"
          className="border rounded-md h-[35px]"
        />
        <br />
        <Input
          placeholder="Username"
          type="text"
          className="border rounded-md h-[35px]"
        />
        <br />
        <Input
          placeholder="Password"
          type="text"
          className="border rounded-md h-[35px]"
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
