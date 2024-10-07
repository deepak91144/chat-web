import { Avatar, AvatarGroup } from "@mui/material";

const AvatarCard = ({ avatar = [], max = 4, width = 50, height = 50 }) => {
  return (
    <>
      <AvatarGroup max={max}>
        {avatar.length > 0 ? (
          avatar.map((image) => {
            return (
              <>
                <Avatar style={{ width: width, height: height }} src={image} />
              </>
            );
          })
        ) : (
          <>
            <Avatar style={{ width: width, height: height }} src="" />
          </>
        )}
      </AvatarGroup>
    </>
  );
};

export default AvatarCard;
