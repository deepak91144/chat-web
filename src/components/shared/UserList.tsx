import { sampleUsers } from "../../constants/sampleData";
import UserItem from "./UserItem";

const UserList = () => {
  return (
    <>
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
    </>
  );
};

export default UserList;
