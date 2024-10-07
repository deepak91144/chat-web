import { Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UserItem from "../shared/UserItem";
import { useEffect, useState } from "react";
import { getAccessToken, getUserId } from "../../utils/localstorage-utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllusers } from "../../store/slices/userSlice";
import {
  fetchMyFriends,
  friendRequestISent,
} from "../../store/slices/friendRequestSlice";

const SearchDialogContent = ({ selectUser }: any) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const {
    user: { users },
    friendRequestReducer: {
      friendRequestISent_receiverIds,
      friendRequests,
      friendIds,
    },
  } = useSelector((state) => state);
  const [allUsers, setAllUsers] = useState([...users]);

  const dispatch = useDispatch();

  const addFriendHandler = () => {};
  const getUsers = async () => {
    const token = getAccessToken();
    const userId = getUserId();
    if (token) {
      dispatch(fetchMyFriends(userId));
      dispatch(fetchAllusers(token));
      dispatch(friendRequestISent(userId));
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    // const usersList = [...users];
    // const notFriends = usersList.filter((user: any) => {
    //   if (!friendIds.includes(user._id)) {
    //     return user;
    //   }
    // });

    setAllUsers(users);
  }, [users, friendRequests]);

  const handleSearchChange = (e: any) => {
    setSearchKeyword(e.target.value);
    const filteredUsers = users.filter((user: any) => {
      if (user?.name.includes(e.target.value)) {
        return user;
      }
    });
    setAllUsers(filteredUsers);
  };

  return (
    <>
      <div className="">
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          onChange={handleSearchChange}
          className="w-[100%]"
        />
        {allUsers.length > 0 ? (
          allUsers.map((user) => {
            return (
              <>
                <UserItem
                  name={user?.name}
                  _id={user?._id}
                  avatar={user?.avatar}
                  handler={addFriendHandler}
                  selectUser={selectUser}
                  addedAsFriend={friendIds.includes(user._id)}
                  friendRequestSent={friendRequestISent_receiverIds.includes(
                    user._id
                  )}
                />
              </>
            );
          })
        ) : (
          <>
            <div className="mt-5 text-gray-400">No users found</div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchDialogContent;
