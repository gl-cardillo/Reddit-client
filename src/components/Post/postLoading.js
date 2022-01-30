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
                <TiArrowUpThick className={`icon-action `} />              
                <div className="ups">
                </div>
                <TiArrowDownThick className={`icon-action `}/>         
            </div>
            <div className="image-comments-container loading">
                <div className="pics-title">
                    <div className="post-title">
                    </div>
                    <Skeleton width="200px" />
                    <div className="name-comment">
                        <div className="author">
                        </div>            
                            <TiMessage className="icon-action message"  />                                                 
                    </div>
                </div>
            </div>         
        </article>

    )
}

export default PostLoading;