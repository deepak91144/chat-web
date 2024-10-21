import { Button, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyFriends } from "../../store/slices/friendRequestSlice";
import { getUserId } from "../../utils/localstorage-utils";
import GroupUserList from "../group/GroupUserList";
import {
  addMembersToGroup,
  groupDetails,
  removeMembersFromGroup,
} from "../../store/slices/chatClice";
import toast from "react-hot-toast";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { white } from "../../constants/Colors";
const GroupDetails = ({ updateGroupName, deleteGroup, goBack }: any) => {
  const [isEditGroup, setIsEditGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedMembers, setSelectedMembers]: any = useState([]);
  const [deleteConformationDialog, setDeleteConformationDialog] =
    useState(false);
  const [addMembrDialog, setAddMembrDialog] = useState(false);
  const {
    chatReducer: { group },
    friendRequestReducer: { friends },
  } = useSelector((store: any) => store);
  const dispatch = useDispatch();
  const openDeleteConfirmationModal = () => {
    setDeleteConformationDialog(true);
  };
  const handleConfirmDeleteGroup = async () => {
    deleteGroup();
    setDeleteConformationDialog(false);
  };

  const handleCancelDeletegroup = () => {
    setDeleteConformationDialog(false);
  };

  const openAddMemberDialog = () => {
    setAddMembrDialog(true);
  };

  const handleConfirmAddMember = async () => {
    if (selectedMembers.length === 0) {
      toast.error("please choose at least one member");
      return;
    }
    const payload = {
      chatId: group._id,
      members: selectedMembers,
    };
    await dispatch(addMembersToGroup(payload));
    await dispatch(groupDetails(group._id));
    setSelectedMembers([]);
    toast.success("member added successfully to group");
    setAddMembrDialog(false);
  };
  const handleCancelAddmember = () => {
    setAddMembrDialog(false);
  };
  const handleEditIconClick = () => {
    setIsEditGroup(true);
  };
  const editGroupName = () => {
    updateGroupName(groupName);
    setIsEditGroup(false);
  };
  const handleOnChange = (e: any) => {
    setGroupName(e.target.value);
  };
  useEffect(() => {
    setGroupName(group?.name);
  }, [group]);
  useEffect(() => {
    const userId = getUserId();
    dispatch(fetchMyFriends(userId));
  }, []);
  const selectUser = (memebrId: string) => {
    setSelectedMembers((prev: any) => {
      return [...prev, memebrId];
    });
  };

  const deSelectUser = (memberId: string) => {
    const previousMembers = [...selectedMembers];
    const filteredMembers = previousMembers.filter((member: any) => {
      return member !== memberId;
    });
    setSelectedMembers(filteredMembers);
  };
  const removeUserFromGroup = async () => {
    if (selectedMembers.length === 0) {
      toast.error("please choose at least one member");
      return;
    }
    const payload = {
      chatId: group._id,
      members: selectedMembers,
    };
    const response = await dispatch(removeMembersFromGroup(payload));
    setSelectedMembers([]);
    if (response.error) {
      toast.error("Something went wrong");
      return;
    }

    await dispatch(groupDetails(group._id));
    toast.success("Use removed successfully");
  };

  return (
    <>
      <div className="md:w-[100%] w-[95%]">
        <div onClick={goBack} className="md:hidden cursor-pointer">
          <ArrowBackIcon sx={{ color: white }} />
        </div>
        <div className="md:h-[20vh] md:mt-5  mt-8 ">
          {isEditGroup ? (
            <>
              <div className="">
                <input
                  className="border"
                  value={groupName}
                  onChange={handleOnChange}
                />
                <Button onClick={editGroupName} sx={{ color: white }}>
                  Update
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <span className={`text-lg capitalize text-[${white}]`}>
                  {groupName}
                </span>
                <span
                  onClick={handleEditIconClick}
                  className="cursor-pointer ml-3"
                >
                  <Tooltip title="Update Group Name">
                    <IconButton>
                      <EditIcon sx={{ color: white }} />
                    </IconButton>
                  </Tooltip>
                </span>
              </div>
            </>
          )}
        </div>
        <div className="md:h-[50vh]  mt-5  ">
          <div className={`text-[${white}]`}>Members</div>
          <div>
            <GroupUserList
              members={group.memberDetails}
              group={group}
              selectUser={selectUser}
              deSelectUser={deSelectUser}
              selectedMembers={selectedMembers}
              showingMembersList={true}
            />
            <button
              onClick={removeUserFromGroup}
              className={`cursor-pointer mt-5   w-[50%] flex justify-center items-center text-[${white}]`}
            >
              Remove User
            </button>
          </div>
        </div>
        <div className="flex w-[100%] justify-center md:mt-0 mt-5 ">
          <Button
            variant="outlined"
            startIcon={<DeleteIcon sx={{ color: white }} />}
            onClick={openDeleteConfirmationModal}
            sx={{ color: white }}
          >
            Delete Group
          </Button>
          <Button
            variant="outlined"
            startIcon={<AddIcon sx={{ color: white }} />}
            style={{ marginLeft: "1rem" }}
            onClick={openAddMemberDialog}
            sx={{ color: white }}
          >
            Add members
          </Button>
        </div>
        {/* delete confirmation modal */}
        {deleteConformationDialog && (
          <CommonDialog
            open={deleteConformationDialog}
            submitAction={handleConfirmDeleteGroup}
            cancelAction={handleCancelDeletegroup}
            dialogContent="Are you sure to delete this group"
            dialogTitle="Delete Group"
            firstButtonText="Confirm"
            secondButtonText="Cancel"
            width="xs"
          />
        )}
        {/* Add members dialog */}
        {addMembrDialog && (
          <CommonDialog
            open={addMembrDialog}
            submitAction={handleConfirmAddMember}
            cancelAction={handleCancelAddmember}
            dialogContent={
              <GroupUserList
                members={friends}
                group={group}
                selectUser={selectUser}
                deSelectUser={deSelectUser}
                selectedMembers={selectedMembers}
              />
            }
            dialogTitle="Add Members"
            firstButtonText="Add"
            secondButtonText="Cancel"
            width="xs"
          />
        )}
      </div>
    </>
  );
};

export default GroupDetails;
