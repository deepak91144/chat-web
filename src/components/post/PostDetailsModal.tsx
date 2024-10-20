import React from "react";
import CommonDialog from "../common-dialog/CommonDialog";
import PostDetails from "./PostDetails";
import { useDispatch } from "react-redux";
import { clearPost } from "../../store/slices/postSlice";

const PostDetailsModal = ({
  openPostDetailsDialog,
  setOpenPostDetailsDialog,
}: any) => {
  const handleClose = () => {
    setOpenPostDetailsDialog(false);
  };
  return (
    <>
      <CommonDialog
        open={openPostDetailsDialog}
        handleClose={handleClose}
        cancelAction={handleClose}
        dialogContent={<PostDetails />}
        dialogTitle="Post Details"
        secondButtonText="Close"
        showFirstButton={false}
        isFullWidth={true}
      />
    </>
  );
};

export default PostDetailsModal;
