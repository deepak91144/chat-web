import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { primary } from "../../constants/Colors";
const GroupUserItem = (props: any) => {
  const {
    name,
    _id,
    avatar,

    isAdded,
    selectUser,
    deselectUser,
  } = props;

  return (
    <>
      <div className="flex mt-5  relative  items-center">
        <Avatar src={avatar.url} />
        <div className="ml-2 capitalize">{name}</div>

        <span className="ml-5 cursor-pointer absolute right-0">
          {isAdded ? (
            <>
              <Tooltip title="remove from  group">
                <IconButton>
                  <RemoveIcon
                    sx={{ color: "red" }}
                    onClick={() => {
                      deselectUser(_id);
                    }}
                  />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Add to group">
                <IconButton>
                  <AddIcon
                    sx={{ color: primary }}
                    onClick={() => {
                      selectUser(_id);
                    }}
                  />
                </IconButton>
              </Tooltip>
            </>
          )}
        </span>
      </div>
    </>
  );
};

export default GroupUserItem;
