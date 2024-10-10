import { Avatar } from "@mui/material";

export const ImagePreView = ({
  url,
  imageWidth = 100,
  imageHeight = 100,
}: any) => {
  return (
    <>
      <div className="flex justify-center">
        <Avatar
          src={url}
          style={{
            objectFit: "contain",
            width: imageWidth,
            height: imageHeight,
          }}
        />
      </div>
    </>
  );
};

export default ImagePreView;
