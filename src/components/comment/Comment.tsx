import { Button } from "@mui/material";
import { useState } from "react";

const Comment = ({ submitComment }: any) => {
  const [commentText, setCommentText] = useState("");
  const handleOnChange = (e) => {
    setCommentText(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <textarea
          placeholder="Type your comment..."
          style={{ border: "none", outline: "none", background: "transparent" }}
          onChange={handleOnChange}
          value={commentText}
        />
        {commentText !== "" && (
          <>
            <Button
              onClick={() => {
                submitComment(commentText);
                setCommentText("");
              }}
            >
              Submit
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default Comment;
