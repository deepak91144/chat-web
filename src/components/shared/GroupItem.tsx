import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";

const GroupItem = ({ group, chatId }: any) => {
  console.log(chatId);

  const { name, avatar, _id } = group;
  return (
    <>
      <div className="flex mt-2 bg-blue-500">
        <AvatarCard avatar={avatar} />
        <Link
          to={`?group=${_id}`}
          onClick={(e) => {
            if (_id === chatId) e.preventDefault();
          }}
        >
          {name}
        </Link>
      </div>
    </>
  );
};

export default GroupItem;
