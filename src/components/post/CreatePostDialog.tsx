import { useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";
import PostForm from "./PostForm";
import { useDispatch } from "react-redux";
import { createPost, fetchPosts } from "../../store/slices/postSlice";
import { getUserId } from "../../utils/localstorage-utils";
import toast from "react-hot-toast";
import * as io from "socket.io-client";
import { baseUrl } from "../../constants/serverConstants";
const socket = io.connect(baseUrl);

const CreatePostDialog = ({ openPostDialog, setOpenPostDialog }: any) => {
  const [post, setPost]: any = useState({
    title: "",
    description: "",
    images: {},
    creator: getUserId(),
  });
  const dispatch = useDispatch();

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
