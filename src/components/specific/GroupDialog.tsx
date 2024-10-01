import { useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";
import GroupDialogContent from "./GroupDialogContent";

const GroupDialog = ({ isGroup, setIsGroup }: any) => {
  const handleClose = () => {
    setIsGroup(false);
  };
  const handleSubmit = () => {
    setIsGroup(false);
  };
  const handleCancel = () => {
    setIsGroup(false);
  };
  return (
    <>
      <CommonDialog
        open={isGroup}
        handleClose={handleClose}
        submitAction={handleSubmit}
        cancelAction={handleCancel}
        dialogTitle="New Group"
        dialogContent={<GroupDialogContent />}
        firstButtonText="Create"
        secondButtonText="Cancel"
        firstButtonBgColor="success"
        secondButtonBgColor="danger"
        width="xs"
      />
    </>
  );
};

export default GroupDialog;
