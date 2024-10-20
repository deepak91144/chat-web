import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RenderAttachment from "../shared/RenderAttachment";
import { fileFormat } from "../../lib/feature";

import CommentList from "../comment/CommentList";

const PostDetails = () => {
  const [fileType, setFileType] = useState("");
  const [url, setUrl] = useState("");
  const {
    postReducer: { post },
  } = useSelector((store) => store);
  useEffect(() => {
    if (post?.images) {
      const type = fileFormat(post?.images[0]?.url);

      const url = post?.images[0]?.url;
      setFileType(type);
      setUrl(url);
    }
  }, [post]);

  return (
    <>
      {Object.entries(post).length > 0 ? (
        <>
          <div>{RenderAttachment(fileType, url, "100%")}</div>
          <div className="text-[1.5rem] font-bold ">{post?.title}</div>
          <div className="text-[1rem] text-gray-500">{post?.description}</div>
          <div>
            <CommentList comments={post?.comments ? post?.comments : []} />
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PostDetails;
