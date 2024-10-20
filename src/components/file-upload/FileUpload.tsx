const FileUpload = (props: any) => {
  const { fileInputRef, handleFileOnChange, accept = "" } = props;

  return (
    <>
      <div>
        <input
          type="file"
          accept={accept}
          ref={fileInputRef}
          hidden
          onChange={(e) => {
            handleFileOnChange(e);
          }}
        />
      </div>
    </>
  );
};

export default FileUpload;
