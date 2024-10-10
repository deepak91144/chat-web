import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const GroupuserItem = ({
  member,
  selectUser,
  isSelected,
  deSelectUser,
  showingMembersList = false,
}: any) => {
  return (
    <>
      {showingMembersList ? (
        <>
          {" "}
          <div className="flex mt-5  relative">
            <PersonIcon />
            <div>{member.name}</div>

            {isSelected ? (
              <>
                <span
                  className="ml-5 cursor-pointer absolute right-0"
                  onClick={() => {
                    deSelectUser(member._id);
                  }}
                >
                  <AddIcon color="success" />
                </span>
              </>
            ) : (
              <>
                <span
                  className="ml-5 cursor-pointer absolute right-0"
                  onClick={() => {
                    selectUser(member._id);
                  }}
                >
                  <RemoveIcon />
                </span>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="flex mt-5  relative">
            <PersonIcon />
            <div>{member.name}</div>

            {isSelected ? (
              <>
                <span
                  className="ml-5 cursor-pointer absolute right-0"
                  onClick={() => {
                    deSelectUser(member._id);
                  }}
                >
                  <RemoveIcon />
                </span>
              </>
            ) : (
              <>
                <span
                  className="ml-5 cursor-pointer absolute right-0"
                  onClick={() => {
                    selectUser(member._id);
                  }}
                >
                  <AddIcon color="success" />
                </span>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GroupuserItem;