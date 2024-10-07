import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

const UserItem = (props: any) => {
  const {
    name,
    _id,
    avatar,
    handler,
    selectUser,
    friendRequestSent,
    addedAsFriend,
  } = props;
  return (
    <>
      <div className="flex mt-5  relative">
        <PersonIcon />
        <div className="ml-2">{name}</div>

        {friendRequestSent ? (
          <>
            <div className="ml-5  absolute right-0 ">Request Sent</div>
          </>
        ) : addedAsFriend ? (
          <>
            <div className="ml-5  absolute right-0">Friend</div>
          </>
        ) : (
          <>
            <span
              className="ml-5 cursor-pointer absolute right-0"
              onClick={() => {
                selectUser(_id);
              }}
            >
              <AddIcon color="success" />
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default UserItem;
