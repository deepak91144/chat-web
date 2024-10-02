export const ImagePreView = ({
  url,
  imageWidth = 100,
  imageHeight = 100,
}: any) => {
  return (
    <>
      <div className=" border flex justify-center">
        <img
          src={url}
          width={imageWidth}
          height={imageHeight}
          style={{ objectFit: "contain" }}
          alt="image preview"
        />
      </div>
    </>
  );
};

export default ImagePreView;
