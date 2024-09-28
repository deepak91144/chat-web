import { useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";

const GroupDialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <CommonDialog
        open={isOpen}
        handleClose={handleClose}
        dialogTitle="Group"
        dialogContent={<h1>this is group dialog</h1>}
        firstButtonText="Add"
        secondButtonText="Cancel"
        firstButtonBgColor="success"
        secondButtonBgColor="danger"
      />
    </>
  );
};

export default GroupDialog;
