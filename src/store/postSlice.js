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
        },
        getCommentsPending(state, action) {
            state.post[action.payload].showingComments = !state.post[action.payload].showingComments;
            if (!state.post[action.payload].showingComments) {
                return;
            }
            state.post[action.payload].loadingComments = true;
            state.post[action.payload].errorComments = false;
        },
        getCommentsFulfilled(state, action) {            
            state.post[action.payload.index].loadingComments = false;
            state.post[action.payload.index].errorComments = false;
            state.post[action.payload.index].comments = action.payload.data;           
        },
        getCommentsFailed(state, action) {
            state.post[action.payload].loadingComments = false;
            state.post[action.payload].errorComments = true;
        },
    }
})


export const fetchPost =  (subreddit) => async (dispatch) => {
    try {
        dispatch(getRedditPostPending());

        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        const data = json.data.children.map((post) => post.data);

        const postData = data.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,

        }))
   
        dispatch(getRedditPostFulfilled(postData));

    } catch (error) {
        dispatch(getRedditPostFailed());
    }
}

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(getCommentsPending(index));
        const response = await fetch(`https://www.reddit.com/${permalink}.json`);
        const json = await response.json();
      
        const data = json[1].data.children.map((subreddit) => subreddit.data);
        console.log(data)

        dispatch(getCommentsFulfilled({index, data}))
    } catch(error) {
        dispatch(getCommentsFailed(index));
    }
};

export const { getRedditPostFailed, 
               getRedditPostPending, 
               getRedditPostFulfilled,
               getCommentsFailed,
               getCommentsPending,
               getCommentsFulfilled,
               toggleShowingComments
            } = Post.actions;

export default Post.reducer;
export const selectPost = (state) => state.post.post;
export const selectLoadingPost = (state) => state.post.isPending;
export const selectErrorPost = (state) => state.post.isFailed;