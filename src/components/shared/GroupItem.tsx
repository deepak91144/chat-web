import { Link, useNavigate } from "react-router-dom";
import AvatarCard from "./AvatarCard";

const GroupItem = ({ group, chatId, selectGroup }: any) => {
  const navigate = useNavigate();
  const { name, avatars, _id } = group;
  const showGroupDetails = (_id: string) => {
    navigate(`?group=${_id}`);
  };
  return (
    <>
      <div
        className="flex mt-2 bg-blue-500 cursor-pointer  justify-between items-center p-5"
        onClick={() => {
          selectGroup(group);
          showGroupDetails(_id);
        }}
      >
        <AvatarCard avatar={avatars} />
        <div
          onClick={(e) => {
            if (_id === chatId) e.preventDefault();
          }}
          className="text-fuchsia-50 capitalize"
        >
          {name}
        </div>
      </div>
    </>
  );
};

export default GroupItem;
