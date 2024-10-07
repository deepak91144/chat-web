import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
      <div className="flex mt-5  relative">
        <PersonIcon />
        <div className="ml-2">{name}</div>

        <span className="ml-5 cursor-pointer absolute right-0">
          {isAdded ? (
            <>
              <RemoveIcon
                style={{ color: "green" }}
                onClick={() => {
                  deselectUser(_id);
                }}
              />
            </>
          ) : (
            <>
              <AddIcon
                style={{ color: "green" }}
                onClick={() => {
                  selectUser(_id);
                }}
              />
            </>
          )}
        </span>
      </div>
    </>
  );
};

export default GroupUserItem;
