import React from 'react'
import {FaRegCheckCircle} from "react-icons/fa"
const Posts = () => {
    return (
        <div className="postss">
            <div className="postss_first">
                <div className="posts_first_img">
                    <img src="/images/1.jpeg" alt="profile img"/>
                </div>
                <div className="posts_first_name"><strong>Rahul dubey</strong><FaRegCheckCircle className="verify"/></div>
                <div className="posts_first_username">@info<span>6m</span></div>
            </div>            
            <div className="postss_details">
                
            </div>
        </div>
    )
}

export default Posts
