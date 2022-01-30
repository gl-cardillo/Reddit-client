import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { selectPost, fetchPost,  
         selectLoadingPost,
         selectErrorPost, fetchComments
        }  from "../../store/postSlice";
import {
    TiArrowDownThick,
    TiArrowUpThick,
    TiMessage,
  } from 'react-icons/ti';

import PostLoading from "./postLoading";
import moment from "moment";
import Skeleton from "react-loading-skeleton";

const Post = (subreddit) => {
    
    const dispatch = useDispatch();
    const posts = useSelector(selectPost);
    const loading = useSelector(selectLoadingPost)
    const error = useSelector(selectErrorPost);

    useEffect(() => {
        dispatch(fetchPost( subreddit && 'Home'));
    }, [dispatch, subreddit])
    
    const onToggleShowingComments = (index, permalink) => { 
          dispatch(fetchComments(index, permalink));         
        };
    
    const showingComments = (post) => {
        if (post.errorComments) {
            return (
                <div className="comments-error">
                    <p>Sorry, I can't load the comments</p>
                </div>
            )
        }

        if (post.loadingComments) {
            return (
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            )
        }
        if (post.showingComments) {     
        return (
            <div>
                {post.comments.map((comment) => (                 
                    <div key={comment.id} className="comment-container"> 
                    <p className="comment author">{comment.author}</p>
                    <p className="coment-body">{comment.body}</p>
                        <div className="comment-score-time">                           
                            <p className="time">{moment.unix(comment.created_utc).fromNow()}</p>
                            <div className="comment-score-container">
                                <p className="comment-score">{comment.score}</p>
                                <TiArrowUpThick className="active" />
                            </div>
                        </div>                       
                    </div>                   
                ))}
            </div>
            )
        } 
    }

    const handleClick = () => {
        dispatch(fetchPost('Home'));
    }
 
    if (error) {
        return (
            <div className="error" >
                <h2 >Sorry, I can't find this page :( </h2>
                <button className="error-button" 
                        onClick={handleClick}
                        aria-label="button for go back">Go back!</button>
            </div>
        )
    }

    if (loading) {
        return (
                <div className="post-container loading-container">
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                </div>
        )
    }

    return (
        <div className="post-container">
               {posts.map((post, index) => {
                    return (
                        <article key={post.id} >
                            <div className="score-container">                            
                                <TiArrowUpThick className="icon-action "/>                                                                 
                                <div className="ups">
                                    {post.ups}
                                </div>              
                                <TiArrowDownThick className="icon-action "/>       
                            </div>
                            <div className="image-comments-container">
                                <div className="pics-title">
                                    <div className="post-title">
                                        {post.title}
                                    </div>
                                    <img src={post.url} alt=""/>
                                    <div className="author-comment">
                                        <div className="author">
                                            {post.author}
                                        </div>
                                        <div className="time">
                                            {moment.unix(post.created_utc).fromNow()}
                                        </div>
                                        <button type="button"
                                                className="comments-button" 
                                                onClick={() => onToggleShowingComments(index, post.permalink)} 
                                                aria-label="button for show comments" >
                                            <TiMessage className="icon-action message"  />
                                            {post.num_comments}                                
                                        </button>
                                    </div>
                                    {showingComments(post)}
                                </div>
                            </div>         
                        </article>
                    )
                })}
         
        </div>
    )
}

export default Post;
