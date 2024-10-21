import CommonDialog from "../common-dialog/CommonDialog";
import PostDetails from "./PostDetails";

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
