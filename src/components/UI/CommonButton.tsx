import { Button } from "@mui/material";

const CommonButton = ({ text, onClickAction, variant, bgColor }: any) => {
  return (
    <>
      <Button
        variant={variant ? variant : "contained"}
        onClick={onClickAction}
        color={bgColor}
      >
        {text ? text : "button"}
      </Button>
    </>
  );
};

export default CommonButton;
