import { useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";

const NotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <CommonDialog
        open={isOpen}
        handleClose={handleClose}
        dialogTitle="Notifications"
        dialogContent={<h1>this is notification dialog</h1>}
        firstButtonText="ok"
        secondButtonText="Cancel"
        firstButtonBgColor="success"
        secondButtonBgColor="danger"
      />
    </>
  );
};

export default NotificationDialog;
