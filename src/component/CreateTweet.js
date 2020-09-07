import React from 'react'
import { FaRegImage, FaRegListAlt, FaRegSmile, FaCalendarCheck } from 'react-icons/fa'

const CreateTweet = () => {
    return (
        <div className="create">
            <div className="create_first">
                <div className="create_img">
                    <img src="/images/1.jpeg" alt="profile img"/>
                </div>
                <div className="create_input">
                    <input type="text" className="create_control" placeholder="Whats happening?"/>
                </div>
            </div>
            <div className="create_second">
                <div className="create_icons">
                <FaRegImage className="ic"/>
                <FaRegListAlt className="ic"/>
                <FaRegSmile className="ic"/>                        
                <FaCalendarCheck className="ic"/>
            </div>
            <div className="create_btn">
                <a href="#">Tweet</a>
            </div>

            </div>
            
        </div>
    )
}

export default CreateTweet
