import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {
    TiArrowDownThick,
    TiArrowUpThick,
    TiMessage,
  } from 'react-icons/ti';


const PostLoading = () => {
    return (
        <article >
            <div className="score-container">
                <button className="upvote" type="button" >
                    <TiArrowUpThick className={`icon-action `} />
                </button>
                <div className="ups">
                </div>
                <button className="downvote" type="button" >
                    <TiArrowDownThick className={`icon-action `}/>
                </button>
            </div>
            <div className="image-comments-container loading">
                <div className="pics-title">
                    <div className="post-title">
                    </div>
                    <Skeleton width="200px" />
                    <div className="name-comment">
                        <div className="author">
                        </div>
                        <button type="button comments"  >
                            <TiMessage className="icon-action message"  />                                               
                        </button>
                    </div>
                </div>
            </div>         
        </article>

    )
}

export default PostLoading;