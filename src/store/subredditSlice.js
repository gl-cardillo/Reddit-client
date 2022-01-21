import { createSlice} from '@reduxjs/toolkit';



const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isPending: false,
        isfailed: false,
    },
    reducers: {
        getSubredditsPending(state) {
            state.isPending = true;
            state.isfailed = false;
        },
        getSubredditsFulfilled(state, action) {
            state.isPending = false;
            state.subreddits = action.payload;
        },
        getSubredditsFailed(state) {
            state.isLoading = false;
            state.isfailed = true;
        }
    }
});



export const fetchSubreddits = () => async  (dispatch) => {
    try {
        dispatch(getSubredditsPending());
        const response = await fetch('https://www.reddit.com/subreddits.json');
        const json = await response.json();
        const subreddits = json.data.children.map((subreddit) => subreddit.data);
        
      
        dispatch(getSubredditsFulfilled(subreddits));
    } catch (error) {
        dispatch(getSubredditsFailed());
    }
} 

export const {getSubredditsPending, getSubredditsFulfilled, getSubredditsFailed} = subredditSlice.actions;

export default subredditSlice.reducer;
export  const selectSubreddit = (state) => state.subreddits.subreddits;
