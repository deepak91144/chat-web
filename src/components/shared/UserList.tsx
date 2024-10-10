import UserItem from "./UserItem";

const UserList = ({ users, group, selectUser }: any) => {
  return (
    <>
      {users.map((user: any) => {
        return (
          <>
            <UserItem
              name={user.name}
              _id={user._id}
              avatar={user.avatar}
              handler={() => {}}
              isMember={group.members.includes(user._id)}
              selectUser={selectUser}
            />
          </>
        );
      })}
    </>
  );
};

export default UserList;
