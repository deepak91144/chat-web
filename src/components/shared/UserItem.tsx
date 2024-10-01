import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
const UserItem = (props: any) => {
  const { name, _id, avatar, handler } = props;
  return (
    <>
      <div className="flex mt-5  relative">
        <PersonIcon />
        <div className="ml-2">{name}</div>
        <span
          className="ml-5 cursor-pointer absolute right-0"
          onClick={handler}
        >
          <AddIcon style={{ color: "green" }} />
        </span>
      </div>
    </>
  );
};

export default UserItem;
