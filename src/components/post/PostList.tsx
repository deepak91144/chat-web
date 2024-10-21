import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostList = ({ onPostClick, submitComment }: any) => {
  const {
    postReducer: { posts },
  } = useSelector((store: any) => store);
  return (
    <>
      <div className="flex flex-col items-center ">
        {posts.length > 0 ? (
          posts.map((post: any, index: number) => {
            return (
              <>
                <PostItem
                  submitComment={submitComment}
                  onPostClick={onPostClick}
                  key={index}
                  post={post}
                />
              </>
            );
          })
        ) : (
          <>
            <div>No post found</div>
          </>
        )}
      </div>
    </>
  );
};

export default PostList;
