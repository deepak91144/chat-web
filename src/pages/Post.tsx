import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPost, fetchPosts, postDetails } from "../store/slices/postSlice";
import PostList from "../components/post/PostList";
import PostDetailsModal from "../components/post/PostDetailsModal";
import { getUserId } from "../utils/localstorage-utils";
import { postComment } from "../API/comment";
import toast from "react-hot-toast";

const Post = () => {
  const dispatch = useDispatch();
  const [openPostDetailsDialog, setOpenPostDetailsDialog] = useState(false);
  const {
    postReducer: { post, postCopy },
  } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleOnPostClick = (postId: string) => {
    dispatch(clearPost());
    dispatch(postDetails(postId));
    setOpenPostDetailsDialog(true);
  };
  const submitComment = async (comment: string) => {
    const userId = getUserId();
    const payload = {
      comment,
      user: userId,
      post: post?._id,
    };
    const result = await postComment(payload);
    if (result) {
      toast.success("comment added");
      dispatch(postDetails(post?._id));
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <PostList onPostClick={handleOnPostClick} submitComment={submitComment} />
      <PostDetailsModal
        openPostDetailsDialog={openPostDetailsDialog}
        setOpenPostDetailsDialog={setOpenPostDetailsDialog}
      />
    </>
  );
};

export default Post;
