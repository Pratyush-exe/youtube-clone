import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./videocard.css"

function videocard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className = "videocard">
            <img className = "video_thumbnail" src = {image} alt = "" />
            <div className = "video_info">
                <Avatar className = "video_avatar" 
                    alt = {channel} 
                    src = {channelImage} />
                <div className = "video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} · {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default videocard
