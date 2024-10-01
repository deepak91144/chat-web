import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "./UserItem";
import { useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";
import UserList from "./UserList";
import EditIcon from "@mui/icons-material/Edit";
const GroupDetails = () => {
  const [isEditGroup, setIsEditGroup] = useState(false);
  const [groupName, setGroupName] = useState("groupName");
  const [deleteConformationDialog, setDeleteConformationDialog] =
    useState(false);
  const [addMembrDialog, setAddMembrDialog] = useState(false);
  const openDeleteConfirmationModal = () => {
    setDeleteConformationDialog(true);
  };
  const handleConfirmDeleteGroup = () => {
    alert("deleteing the group");
    setDeleteConformationDialog(false);
  };

  const handleCancelDeletegroup = () => {
    setDeleteConformationDialog(false);
  };

  const openAddMemberDialog = () => {
    setAddMembrDialog(true);
  };

  const handleConfirmAddMember = () => {
    alert("adding members to group");
    setAddMembrDialog(false);
  };
  const handleCancelAddmember = () => {
    setAddMembrDialog(false);
  };
  const handleEditIconClick = () => {
    setIsEditGroup(true);
  };
  const editGroupName = () => {
    setIsEditGroup(false);
  };
  const handleOnChange = (e: any) => {
    console.log(e.target.value);

    setGroupName(e.target.value);
  };
  return (
    <>
      <div className="">
        <div className="h-[20vh] mt-5 ">
          {isEditGroup ? (
            <>
              <div className="">
                <input className="border" onChange={handleOnChange} />
                <Button onClick={editGroupName}>Edit</Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="text-lg capitalize"> {groupName}</span>
                <span
                  onClick={handleEditIconClick}
                  className="cursor-pointer ml-3"
                >
                  <EditIcon />
                </span>
              </div>
            </>
          )}
        </div>
        <div className="h-[60vh] ">
          <div>Members</div>
          <div>
            {sampleUsers.map((user) => {
              return (
                <>
                  <UserItem
                    name={user.name}
                    _id={user._id}
                    avatar={user.avatar}
                    handler={() => {}}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="border">
          <Button
            variant="outlined"
            startIcon={<DeleteIcon style={{ color: "red" }} />}
            onClick={openDeleteConfirmationModal}
          >
            Delete Group
          </Button>
          <Button
            variant="outlined"
            startIcon={<AddIcon style={{ color: "green" }} />}
            style={{ marginLeft: "1rem" }}
            onClick={openAddMemberDialog}
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
            dialogContent={<UserList />}
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
