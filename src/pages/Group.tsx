import { useNavigate, useSearchParams } from "react-router-dom";
import GroupList from "../components/shared/GroupList";
import GroupDetails from "../components/shared/GroupDetails";
import AppLayout from "../components/layout/AppLayout";
import Profile from "./Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGroupName,
  clearGroup,
  deleteAGroup,
  myGroups,
  selectedGroup,
} from "../store/slices/chatClice";
import toast, { Toaster } from "react-hot-toast";

const Group = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    chatReducer: { groups, group },
  } = useSelector((store) => store);
  const chatId = searchParams.get("group");
  const fetchMyGroups = () => {
    dispatch(myGroups());
  };
  const clearGroupDetails = () => {
    dispatch(clearGroup());
  };
  useEffect(() => {
    clearGroupDetails();
    fetchMyGroups();
  }, []);
  const selectGroup = (groupDetails: any) => {
    dispatch(selectedGroup(groupDetails));
  };

  const updateGroupName = async (name: string) => {
    const payload = {
      chatId: group._id,
      name,
    };
    await dispatch(changeGroupName(payload));
    toast.success("Group name updated");
    fetchMyGroups();
  };

  const deleteGroup = async () => {
    await dispatch(deleteAGroup(group._id));
    clearGroupDetails();
    fetchMyGroups();
    toast.success("Successfully deleted");
    navigate("/groups");
  };

  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="w-[30%] ">
          <GroupList
            myGroups={groups}
            chatId={chatId}
            selectGroup={selectGroup}
          />
        </div>
        <div className="w-[50%] flex flex-col items-center">
          {Object.keys(group).length > 0 && (
            <>
              <GroupDetails
                updateGroupName={updateGroupName}
                deleteGroup={deleteGroup}
              />
            </>
          )}
        </div>
        <Profile />
      </div>
    </>
  );
};
export default AppLayout()(Group);
