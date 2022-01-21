import { createSlice } from "@reduxjs/toolkit";

const Post = createSlice({
    name: 'post',
    initialState: {
        post: [],
        isFailed: false,
        isPending: false
    },
    reducers:{
        getRedditPostFulfilled(state, action) {
            state.isFailed = false;
            state.isPending = false;
            state.post = action.payload;
        },
        getRedditPostFailed(state) {
            state.isFailed = true;
            state.isPending = false;
        },
        getRedditPostPending(state) {
            state.isFailed = false;
            state.isPending = true;
        }
    }
})


export const fetchPost=  (subreddit) => async (dispatch) => {
    try {
        dispatch(getRedditPostPending());

        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        const postData = json.data.children.map((post) => post.data);
   
        dispatch(getRedditPostFulfilled(postData));

    } catch (error) {
        dispatch(getRedditPostFailed);
    }
}

export const { getRedditPostFailed, getRedditPostPending, getRedditPostFulfilled} = Post.actions;
export default Post.reducer;
export const selectPost = (state) => state.post.post;