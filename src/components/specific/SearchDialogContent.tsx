import { Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
const SearchDialogContent = () => {
  const addFriendHandler = () => {
    alert("dfewf");
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
          className="w-[100%]"
        />
        {sampleUsers.map((user) => {
          return (
            <>
              <UserItem
                name={user.name}
                _id={user._id}
                avatar={user.avatar}
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
