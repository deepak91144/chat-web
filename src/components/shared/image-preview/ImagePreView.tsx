export const ImagePreView = ({ url, width, height }: any) => {
  return (
    <>
      <div>
        <img src={url} width={20} height={20} alt="image preview" />
      </div>
    </>
  );
};

export default ImagePreView;
