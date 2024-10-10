import SignupForm from "../auth/SignupForm";
import CommonDialog from "../common-dialog/CommonDialog";

const EditprofileDialog = ({
  editProfileDialog,
  closeEditProfielDialog,
  handleSubmit,
}: any) => {
  return (
    <>
      <CommonDialog
        open={editProfileDialog}
        handleClose={closeEditProfielDialog}
        dialogContent={
          <SignupForm editProfile={true} handleSubmit={handleSubmit} />
        }
        dialogTitle="Update Profile"
        firstButtonText="Update"
        secondButtonText="Cancel"
        showFirstButton={false}
        cancelAction={closeEditProfielDialog}
      />
    </>
  );
};

export default EditprofileDialog;
