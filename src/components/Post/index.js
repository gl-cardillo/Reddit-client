import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { selectPost, fetchPost } from "../../store/postSlice";
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage,
  } from 'react-icons/ti';



const Post = (subreddit) => {
    
    const dispatch = useDispatch();
    const posts = useSelector(selectPost);
 
    useEffect(() => {
        dispatch(fetchPost( subreddit && 'Home'))
    }, [dispatch, subreddit])

    
  
   

    return (
        <div className="Post">
            <ul>
                {posts.map((post) => {
                    return (<li key={post.id} >
                            <div className="score">
                                <button className="upvote" type="button" >
                                <TiArrowUpOutline className="icon-action up"  />
                                
                                </button>
                                <div className="ups">
                                    {post.ups}
                                </div>
                                <button className="downvote" type="button" >
                                <TiArrowDownOutline className="icon-action down" />
                                </button>
                            </div>
                            <div className="post-container">
                                <div className="pics-title">
                                    <div className="post-title">
                                        {post.title}
                                    </div>
                                    <img src={post.url} alt=""/>
                                
                                    <div className="name-comment">
                                        <div className="author">
                                            {post.author}
                                        </div>
                                        <button type="button">
                                            <TiMessage className="icon-action message"  />
                                        </button>
                                </div>
                                </div>
                            </div>
                            
                            
                          
                            </li>
                            )
                })}
            </ul>
        </div>
    )
}
export default Post;
