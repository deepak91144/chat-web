import { useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";
import GroupDialogContent from "./GroupDialogContent";
import _ from "lodash";
import { useDispatch } from "react-redux";
import {
  createGroup,
  fetchChats,
  myGroups,
} from "../../store/slices/chatClice";
import toast from "react-hot-toast";

const GroupDialog = ({ isGroup, setIsGroup }: any) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [groupName, setGroupName] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsGroup(false);
  };

  const handleSubmit = async () => {
    if (!groupName) {
      toast.error("Group name can not be empty");
      return;
    }
    if (selectedUsers.length < 2) {
      toast.error("atleast two members required");
      return;
    }
    const payload = {
      name: groupName,
      members: selectedUsers,
      groupChat: true,
    };

    await dispatch(createGroup(payload));
    dispatch(fetchChats());
    dispatch(myGroups());
    toast.success("Successfully created!");
    setIsGroup(false);
  };
  const handleCancel = () => {
    setSelectedUsers([]);
    setIsGroup(false);
  };
  const selectUser = (_id: string) => {
    setSelectedUsers((pre: any) => {
      return _.uniqBy([...pre, _id], function (e: string) {
        return e;
      });
    });
  };

  const deselectUser = (_id: string) => {
    const allSelectedUsers = selectedUsers.filter((ele) => {
      return _id != ele;
    });
    setSelectedUsers(() => {
      return allSelectedUsers;
    });
  };
  const handleGroupNameChange = (e: any) => {
    setGroupName(e.target.value);
  };
  return (
    <>
      <CommonDialog
        open={isGroup}
        handleClose={handleClose}
        submitAction={handleSubmit}
        cancelAction={handleCancel}
        dialogTitle="New Group"
        dialogContent={
          <GroupDialogContent
            selectUser={selectUser}
            selectedUsers={selectedUsers}
            deselectUser={deselectUser}
            handleGroupNameChange={handleGroupNameChange}
          />
        }
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
