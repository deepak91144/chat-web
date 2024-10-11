import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Avatar } from "@mui/material";
import { white } from "../../constants/Colors";
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
          <div className="flex mt-5  relative items-center">
            <Avatar src={member.avatar.url} />
            <div className={`ml-2 text-[${white}]`}>{member.name}</div>

            {isSelected ? (
              <>
                <span
                  className="ml-5 cursor-pointer absolute right-0"
                  onClick={() => {
                    deSelectUser(member._id);
                  }}
                >
                  <AddIcon color="success" sx={{ color: white }} />
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
                  <RemoveIcon sx={{ color: white }} />
                </span>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="flex mt-5  relative items-center">
            <Avatar src={member.avatar.url} />
            <div className="ml-2">{member.name}</div>

            {isSelected ? (
              <>
                <span
                  className="ml-5 cursor-pointer absolute right-0"
                  onClick={() => {
                    deSelectUser(member._id);
                  }}
                >
                  <RemoveIcon sx={{ color: white }} />
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
                  <AddIcon color="success" sx={{ color: white }} />
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
