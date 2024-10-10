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
    friendRequestReceived,
    fiendRequestActionHandler,
    isMember,
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
        ) : friendRequestReceived ? (
          <>
            <div className="ml-5 cursor-pointer absolute right-0">
              <span
                className="cursor-pointer "
                onClick={() => {
                  fiendRequestActionHandler(_id, true);
                }}
              >
                Accept
              </span>
              <span
                className="ml-2 cursor-pointer"
                onClick={() => {
                  fiendRequestActionHandler(_id, false);
                }}
              >
                Reject
              </span>
            </div>
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
