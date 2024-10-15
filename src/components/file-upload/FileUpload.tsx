import { useEffect, useState } from "react";

const FileUpload = (props: any) => {
  const { fileInputRef, handleFileOnChange, type = "" } = props;
  const [aceept, setAceept] = useState("");

  useEffect(() => {
    if (type == "image") {
      setAceept("image/*");
    }
    if (type == "video") {
      setAceept("video/*");
    }
  }, [type]);

  return (
    <>
      <div>
        <input
          type="file"
          //   accept={aceept}
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
