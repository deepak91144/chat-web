import { Input } from "@mui/material";
import { sampleUsers } from "../../constants/sampleData";
import GroupUserItem from "../shared/GroupUserItem";
import { useState } from "react";
import _ from "lodash";

const GroupDialogContent = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const addUserToGroup = (_id: string) => {
    console.log(_id);

    setSelectedUsers((pre: any) => {
      return _.uniqBy([...pre, _id], function (e: string) {
        return e;
      });
    });
  };
  const removeUserFromGroup = (_id: string) => {
    const allSelectedUsers = selectedUsers.filter((ele) => {
      return _id != ele;
    });
    setSelectedUsers(() => {
      return allSelectedUsers;
    });
  };

  return (
    <>
      <div className="">
        <Input
          id="input-with-icon-adornment"
          placeholder="Enter Group Name"
          className="w-[100%]"
        />
        {users.map((user) => {
          return (
            <>
              <GroupUserItem
                name={user.name}
                _id={user._id}
                avatar={user.avatar}
                addUserToGroup={addUserToGroup}
                removeUserFromGroup={removeUserFromGroup}
                isAdded={selectedUsers.includes(user._id)}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default GroupDialogContent;
