import { useNavigate, useSearchParams } from "react-router-dom";
import GroupList from "../components/shared/GroupList";
import GroupDetails from "../components/shared/GroupDetails";
import AppLayout from "../components/layout/AppLayout";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGroupName,
  clearGroup,
  deleteAGroup,
  myGroups,
  groupDetails,
} from "../store/slices/chatClice";
import toast, { Toaster } from "react-hot-toast";
import { isMobile } from "react-device-detect";

const Group = () => {
  const [searchParams] = useSearchParams();
  const [isGroupActive, setIsGroupActive] = useState(false);
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
  const selectGroup = (group: any) => {
    if (isMobile) {
      setIsGroupActive(true);
    }

    dispatch(groupDetails(group._id));
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
  const goBack = () => {
    navigate("/groups");
    setIsGroupActive(false);
  };
  return (
    <>
      <div className="flex w-screen h-screen mt-5">
        <div
          className="md:w-[30%] w-[100%] md:pl-0 md:pr-0 pl-5 pr-5  "
          style={{ display: isGroupActive ? "none" : "" }}
        >
          <GroupList
            myGroups={groups}
            chatId={chatId}
            selectGroup={selectGroup}
          />
        </div>
        {Object.keys(group).length > 0 && isGroupActive && (
          <>
            <div className="md:w-[50%] w-[100%]   flex flex-col items-center">
              <GroupDetails
                updateGroupName={updateGroupName}
                deleteGroup={deleteGroup}
                goBack={goBack}
              />
            </div>
          </>
        )}
        <div className="md:block hidden">
          <Profile />
        </div>
      </div>
    </>
  );
};
export default AppLayout()(Group);
