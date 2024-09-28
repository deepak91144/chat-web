import { Button } from "@mui/material";

const CommonButton = ({ text, onClickAction, variant }: any) => {
  return (
    <>
      <Button variant={variant ? variant : "contained"} onClick={onClickAction}>
        {text ? text : "button"}
      </Button>
    </>
  );
};

export default CommonButton;
