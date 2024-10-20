import React, { useRef, useState } from "react";
import FileUpload from "../file-upload/FileUpload";
import { setLoading } from "../../store/slices/uploadFileSlice";
import { uploadFile } from "../../API/fileupload";
import { useDispatch, useSelector } from "react-redux";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { fileFormat } from "../../lib/feature";
import RenderAttachment from "../shared/RenderAttachment";
import { Button } from "@mui/material";

const PostForm = ({ post, setPost }: any) => {
  const [uploadedMedia, setUploadedMedia] = useState(null);
  const [mediaFOrmat, setMediaFOrmat] = useState("");
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const {
    fileReducer: { isLoading },
  } = useSelector((store) => store);
  const handleFileOnChange = async (e: any) => {
    const fileDetails = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", fileDetails);
    dispatch(setLoading(true));
    const result = await uploadFile(formData);

    console.log("result", result);

    if (result?.success) {
      setUploadedMedia(result.file);
      const format = fileFormat(result.file.location);
      setMediaFOrmat(format);
      dispatch(setLoading(false));
      setPost((prev) => {
        return {
          ...prev,
          images: { public_id: result.file.key, url: result.file.location },
        };
      });
    }
  };
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSelelctImage = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <div className=" flex flex-col items-center">
        {uploadedMedia && !isLoading ? (
          <>
            {RenderAttachment(mediaFOrmat, uploadedMedia?.location)}
            <Button onClick={onSelelctImage}>Change Media</Button>
          </>
        ) : (
          <>
            <div
              onClick={onSelelctImage}
              className="cursor-pointer border w-[90%] text-center flex flex-col items-center justify-center"
            >
              <CloudUploadIcon
                sx={{ color: "green", width: 100, height: 100 }}
              />
              <span>Upload Media</span>
              {isLoading && (
                <>
                  <span>Uplaoding...</span>
                </>
              )}
            </div>
          </>
        )}

        <input
          name="title"
          placeholder="Enter Title"
          onChange={handleOnChange}
          className="border-gray-500 border w-[90%] h-[50px] rounded-lg outline-none mt-5"
        />
        <br />
        <textarea
          name="description"
          placeholder="Enter Description"
          onChange={handleOnChange}
          className="border-gray-500 border w-[90%] h-[100px] rounded-lg outline-none mt-5"
        />
        <br />
        <FileUpload
          accept="file"
          fileInputRef={fileInputRef}
          handleFileOnChange={handleFileOnChange}
        />
        <br />
      </div>
    </>
  );
};

export default PostForm;
