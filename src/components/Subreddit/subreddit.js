import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { selectSubreddit, fetchSubreddits, selectLoadingSubreddit } from '../../store/subredditSlice';
import { fetchPost } from '../../store/postSlice';

const Subreddit = () => {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddit);
    const loading = useSelector(selectLoadingSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits());
    },[dispatch])

    const handleOnClick = (e) => {
     
        dispatch(fetchPost(`${e.currentTarget.value}`));
    } 

    if (loading) {
        return (
            <div  className="subreddit-container">
                <h2>Subreddit</h2>
                <ul className='subreddits-loading'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }

    return (
        <div className="subreddit-container">
            <h2>Subreddit</h2>
            <ul className='subreddits'>  
                {subreddits.map((subreddit) => {
                            return( <li
                                key={subreddit.id}                            
                                >
                                <button type='button'
                                        onClick={handleOnClick} 
                                        value={subreddit.display_name}
                                        aria-label="button select subredit"
                                >
                                <img src={subreddit.icon_img ||`https://api.adorable.io/avatars/25/${subreddit.display_name}` } 
                                    style={{ border: `3px solid ${subreddit.primary_color}` }} 
                                    alt=""
                                    />                           
                                {subreddit.display_name}
                                </button>
                                </li>
                                )
                            })    
                }
            </ul>
        </div>
    )
}

export default Subreddit