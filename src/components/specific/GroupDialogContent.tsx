import { Input } from "@mui/material";
import GroupUserItem from "../shared/GroupUserItem";
import { useEffect, useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyFriends } from "../../store/slices/friendRequestSlice";
import { getUserId } from "../../utils/localstorage-utils";

const GroupDialogContent = ({
  selectUser,
  deselectUser,
  selectedUsers,
  handleGroupNameChange,
}: any) => {
  const dispatch = useDispatch();

  const [friendList, setFriendList] = useState([]);

  const {
    friendRequestReducer: { friends },
  } = useSelector((state: any) => state);

  useEffect(() => {
    const userId = getUserId();
    dispatch(fetchMyFriends(userId));
  }, []);

  useEffect(() => {
    setFriendList(friends);
  }, [friends]);

  return (
    <>
      <div className="">
        <Input
          id="input-with-icon-adornment"
          placeholder="Enter Group Name"
          className="w-[100%]"
          onChange={handleGroupNameChange}
        />
        {friendList.map((user: any) => {
          return (
            <>
              <GroupUserItem
                name={user.name}
                _id={user._id}
                avatar={user.avatar}
                selectUser={selectUser}
                deselectUser={deselectUser}
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
