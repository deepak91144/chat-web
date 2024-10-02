import { Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useEffect, useState } from "react";
import { getAllUser, getAllUsers } from "../../API/auth";
import { getAccessToken } from "../../utils/localstorage-utils";
const SearchDialogContent = () => {
  const [users, setUsers] = useState([]);
  const addFriendHandler = () => {};
  const getUsers = async () => {
    const token = getAccessToken();
    if (token) {
      const result = await getAllUsers(token);
      if (result) {
        setUsers(result?.users);
      }
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

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
          className="w-[100%]"
        />
        {users.map((user) => {
          return (
            <>
              <UserItem
                name={user?.name}
                _id={user?._id}
                avatar={user?.avatar}
                handler={addFriendHandler}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default SearchDialogContent;
