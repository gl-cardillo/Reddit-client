import { configureStore} from "@reduxjs/toolkit";
import SubredditReducer from './subredditSlice';
import PostReducer from "./postSlice";
import SearchReducer from "./SearchSlice";

export default configureStore({
    reducer: {
        subreddits: SubredditReducer,
        post: PostReducer,
    

    }
})


