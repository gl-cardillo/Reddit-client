import { configureStore} from "@reduxjs/toolkit";
import SubredditReducer from './subredditSlice';
import PostReducer from "./postSlice";

export default configureStore({
    reducer: {
        subreddits: SubredditReducer,
        post: PostReducer,
    }
})
