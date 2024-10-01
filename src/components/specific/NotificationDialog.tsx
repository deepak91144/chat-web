import CommonDialog from "../common-dialog/CommonDialog";
import NotificationDialogContent from "./NotificationDialogContent";

const NotificationDialog = ({ isNotification, setIsNotification }: any) => {
  const handleClose = () => {
    setIsNotification(false);
  };
  const handleSubmit = () => {
    setIsNotification(false);
  };
  const handleCancel = () => {
    setIsNotification(false);
  };
  return (
    <>
      <CommonDialog
        open={isNotification}
        handleClose={handleClose}
        dialogTitle="Notifications"
        submitAction={handleSubmit}
        cancelAction={handleCancel}
        dialogContent={<NotificationDialogContent />}
        firstButtonText="ok"
        secondButtonText="Cancel"
        firstButtonBgColor="success"
        secondButtonBgColor="danger"
      />
    </>
  );
};

export default NotificationDialog;
