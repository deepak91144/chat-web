import { Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UserItem from "../shared/UserItem";
import { useEffect, useState } from "react";
import { getAccessToken, getUserId } from "../../utils/localstorage-utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllusers } from "../../store/slices/userSlice";
import {
  acceptMyFriendRequest,
  fetchMyFriends,
  friendRequestISent,
  myFriendRequest,
} from "../../store/slices/friendRequestSlice";
import toast from "react-hot-toast";
import { fetchChats } from "../../store/slices/chatClice";

const SearchDialogContent = ({ selectUser }: any) => {
  const {
    user: { users },
    friendRequestReducer: {
      friendRequestISent_receiverIds,
      friendRequests,
      friendIds,
      friendRequestSenderIds,
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
  const getMyFriendRequest = async () => {
    const userId = getUserId();
    await dispatch(myFriendRequest(userId));
  };
  useEffect(() => {
    getUsers();
    getMyFriendRequest();
  }, []);
  useEffect(() => {
    setAllUsers(users);
  }, [users, friendRequests]);

  const handleSearchChange = (e: any) => {
    const filteredUsers = users.filter((user: any) => {
      if (user?.name.includes(e.target.value)) {
        return user;
      }
    });
    setAllUsers(filteredUsers);
  };

  const acceptFriendRequest = async (_id: string, accept: boolean) => {
    const requestId = friendRequests.map((request: any) => {
      return request._id;
    });
    const userId = getUserId();
    const payload = {
      requestId: requestId[0],
      accept,
      userId,
    };
    await dispatch(acceptMyFriendRequest(payload));
    dispatch(fetchMyFriends(userId));
    getMyFriendRequest();
    await dispatch(fetchChats());
    if (accept) {
      toast.success("Hurray , you guys are friends now");
    } else {
      toast.error("opps , you rejected the request");
    }
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
                  friendRequestReceived={friendRequestSenderIds?.includes(
                    user._id
                  )}
                  addedAsFriend={friendIds.includes(user._id)}
                  friendRequestSent={friendRequestISent_receiverIds.includes(
                    user._id
                  )}
                  fiendRequestActionHandler={acceptFriendRequest}
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
