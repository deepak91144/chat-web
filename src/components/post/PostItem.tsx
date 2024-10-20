import CreateIcon from "@mui/icons-material/Create";
import Comment from "../comment/Comment";
import RenderAttachment from "../shared/RenderAttachment";
import { fileFormat } from "../../lib/feature";

const PostItem = ({ post, onPostClick, submitComment }: any) => {
  const fileType = fileFormat(post.images[0].url);
  const mediaUrl = post.images[0].url;

  return (
    <>
      <div className="md:w-[65%]  w-[100%] bg-[white] bg-[rgba(255,255,255,0.9)]  mt-5  rounded-xl cursor-pointer ">
        <div
          onClick={() => {
            onPostClick(post?._id);
          }}
        >
          {mediaUrl && (
            <>
              <div className="h-[300px]">
                {RenderAttachment(fileType, mediaUrl, "100%", "100%", true)}
              </div>
            </>
          )}
          <div className="p-5 pt-0">
            <div
              className={`${
                mediaUrl ? "mt-5" : ""
              }  md:text-[1.5vw] text-[1.5rem] capitalize`}
            >
              {post?.title}
            </div>
            <div className="  md:text-[1.5vw] text-[1rem] ">
              {post?.description.length > 90
                ? post?.description?.slice(0, 90) + " Read more..."
                : post?.description}
            </div>
            <div className="mt-2">
              <CreateIcon sx={{ width: 15 }} />
              <span className="text-gray-400 ml-1 capitalize">
                {post?.creator?.name}
              </span>
            </div>
          </div>
        </div>
        <div className="text-center  ">
          <Comment submitComment={submitComment} />
        </div>
      </div>
    </>
  );
};

export default PostItem;
