import { useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";
import PostForm from "./PostForm";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPosts } from "../../store/slices/postSlice";
import { getUserId } from "../../utils/localstorage-utils";
import toast from "react-hot-toast";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8000");

const CreatePostDialog = ({ openPostDialog, setOpenPostDialog }: any) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    images: {},
    creator: getUserId(),
  });
  const dispatch = useDispatch();
  const {
    postReducer: { isError, isLoading, message },
  } = useSelector((store) => store);
  const handleClose = () => {
    setOpenPostDialog(false);
  };
  const dispatchCreatePost = () => {
    return dispatch(createPost(post));
  };
  const handleSubmit = async () => {
    if (post.title === "") {
      toast.error("Opps, give a title to your thought ");
      return;
    }
    await dispatchCreatePost();
    dispatch(fetchPosts());
    toast.success("Your though is released");
    setOpenPostDialog(false);
    socket.emit("newPost", post);
  };
  const handleCancel = () => {
    setOpenPostDialog(false);
  };
  return (
    <>
      <CommonDialog
        open={openPostDialog}
        handleClose={handleClose}
        dialogTitle="Create Post"
        submitAction={handleSubmit}
        cancelAction={handleCancel}
        dialogContent={<PostForm post={post} setPost={setPost} />}
        firstButtonText="Submit"
        secondButtonText="Close"
        firstButtonBgColor="success"
        secondButtonBgColor="danger"
      />
    </>
  );
};

export default CreatePostDialog;
