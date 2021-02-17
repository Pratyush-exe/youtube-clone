import React from 'react'
import "./videorow.css"
import Avatar from '@material-ui/core/Avatar';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';

let dp = "//yt3.ggpht.com/ytc/AAUvwni0qypqyutMh6y46sP2irpEHYdE9WXaH0_SuA60FA=s176-c-k-c0x00ffffff-no-rj-mo"
let channel="Kurzgesagt – In a Nutshell"

function Videorow({views, descp, timestamp, title, image}) {
    return (
        <div className="videorow">
            <img src={image} alt=""/>
            <div className="videorow_text"> 
                <h3 className = "title_bar">
                    {title}
                </h3>
                <p className = "videorow_headline">  
                    {views} views · {timestamp} 
                </p>
                <p className = "videorow_channel">
                    <Avatar className = "dp_img" alt = "" src = {dp} />
                    <p className = "channel_name">{channel}</p>
                    <CheckCircleRoundedIcon className = "verified" />
                </p>
                <p className = "videorow_descp"> {descp} </p>
            </div>
        </div>
    )
}

export default Videorow
