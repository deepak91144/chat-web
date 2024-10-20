import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewPost, fetchAllPosts, fetchPostDetails } from "../../API/post";

const initialState = {
  isLoading: false,
  success: true,
  isError: false,
  message: "",
  posts: [],
  post: {},
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    clearPost: (state, action) => {
      state.post = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      console.log("action_", action);
      state.isError = true;
      state.message = action?.error?.message;
    });

    // fetch all posts
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log("action_", action);
      state.isError = true;
      state.message = action?.error?.message;
    });

    // fetch post details
    builder.addCase(postDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.post = action.payload.post;
    });
    builder.addCase(postDetails.rejected, (state, action) => {
      console.log("action_", action);
      state.isError = true;
      state.message = action?.error?.message;
    });
  },
});
export const createPost = createAsyncThunk("createPost", async (post: any) => {
  return createNewPost(post);
});

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  return fetchAllPosts();
});
export const postDetails = createAsyncThunk(
  "postDetails",
  async (postId: string) => {
    return fetchPostDetails(postId);
  }
);

export const { clearPost } = postSlice.actions;
export default postSlice.reducer;
