import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CommonButton from "../UI/CommonButton";

const CommonDialog = ({
  open,
  handleClose,
  dialogContent,
  dialogTitle,
  firstButtonText,
  secondButtonText,
  firstButtonBgColor,
  secondButtonBgColor,
  width,
  submitAction,
  cancelAction,
}: any) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={width}
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          <CommonButton
            text={firstButtonText}
            onClickAction={submitAction}
            variant="contained"
            bgColor={firstButtonBgColor}
          />
          <CommonButton
            text={secondButtonText}
            onClickAction={cancelAction}
            variant="contained"
            bgColor={secondButtonBgColor}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CommonDialog;
