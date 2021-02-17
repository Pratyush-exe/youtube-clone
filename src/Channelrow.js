import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import channelrow from "./channelrow.css"
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';

function Channelrow({image, Channel, verified, subs, videosnum, descp} ) {
    return (
        <div className = "channelrow">
            <Avatar className = "channelrow_logo"
                alt={Channel} src={image} />
            <div className = "channelrow_text">
                <h4>
                    {Channel} <CheckCircleRoundedIcon className = "verified_channel"/> 
                </h4>
                <p className = "subsrow"> {subs} subscribers · {videosnum} videos </p>
                <p> {descp} </p>
            </div>
            <div className = "notification">
                <h4>SUBSCRIBED</h4>
                <NotificationsActiveRoundedIcon className = "notification_logo" />
            </div>
        </div>
    )
}

export default Channelrow
