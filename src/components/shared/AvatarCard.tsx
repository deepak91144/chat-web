import { Avatar, AvatarGroup } from "@mui/material";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <>
      <AvatarGroup max={max}>
        {avatar.map((image) => {
          return (
            <>
              <Avatar src={image} />
            </>
          );
        })}
      </AvatarGroup>
    </>
  );
};

export default AvatarCard;
