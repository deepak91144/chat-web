import { useEffect } from "react";
import CommonDialog from "../common-dialog/CommonDialog";
import NotificationDialogContent from "./NotificationDialogContent";
import {
  acceptMyFriendRequest,
  myFriendRequest,
} from "../../store/slices/friendRequestSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../utils/localstorage-utils";
import { fetchChats } from "../../store/slices/chatClice";
import toast from "react-hot-toast";

const NotificationDialog = ({ isNotification, setIsNotification }: any) => {
  const {
    user: { users },
    friendRequestReducer: { friendRequests, friendRequestISent_receiverIds },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClose = () => {
    setIsNotification(false);
  };
  const getMyFriendRequest = async () => {
    const receiver = getUserId();
    await dispatch(myFriendRequest(receiver));
  };
  const handleSubmit = async (_id: string, accept: boolean) => {
    const userId = getUserId();
    const payload = {
      requestId: _id,
      accept,
      userId,
    };
    await dispatch(acceptMyFriendRequest(payload));
    if (accept) {
      toast.success("Hurray , you guys are friends now");
    } else {
      toast.error("opps , you rejected the request");
    }
    getMyFriendRequest();
    await dispatch(fetchChats());
  };
  const handleCancel = () => {
    setIsNotification(false);
  };

  useEffect(() => {
    getMyFriendRequest();
  }, []);

  return (
    <>
      <CommonDialog
        open={isNotification}
        handleClose={handleClose}
        dialogTitle="Notifications"
        submitAction={handleSubmit}
        cancelAction={handleCancel}
        dialogContent={
          <NotificationDialogContent
            friendRequestActionHandler={handleSubmit}
            notifications={friendRequests}
          />
        }
        firstButtonText="ok"
        secondButtonText="Close"
        firstButtonBgColor="success"
        secondButtonBgColor="danger"
        showFirstButton={false}
      />
    </>
  );
};

export default NotificationDialog;
