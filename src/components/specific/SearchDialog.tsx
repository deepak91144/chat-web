import CommonDialog from "../common-dialog/CommonDialog";
import SearchDialogContent from "./SearchDialogContent";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  friendRequest,
  friendRequestISent,
} from "../../store/slices/friendRequestSlice";
import { fetchAllusers } from "../../store/slices/userSlice";
import { getAccessToken, getUserId } from "../../utils/localstorage-utils";

const SearchDialog = ({ isSearch, setIsSearch }: any) => {
  const dispatch = useDispatch();
  const selectUser = async (userId: string) => {
    const token = getAccessToken();
    const senderId = getUserId();
    const payload = { receiver: userId, senderId };
    await dispatch(friendRequest(payload));
    dispatch(fetchAllusers(token));
    dispatch(friendRequestISent(senderId));
    toast.success("Friend request sent successfully");
  };

  const handleCancel = () => {
    setIsSearch(false);
  };
  const handleClose = () => {
    setIsSearch(false);
  };
  return (
    <>
      <CommonDialog
        open={isSearch}
        handleClose={handleClose}
        submitAction={selectUser}
        cancelAction={handleCancel}
        dialogTitle="Find People"
        dialogContent={<SearchDialogContent selectUser={selectUser} />}
        firstButtonText="Add"
        secondButtonText="Close"
        firstButtonBgColor="success"
        secondButtonBgColor="danger"
        showFirstButton={false}
      />
    </>
  );
};

export default SearchDialog;
