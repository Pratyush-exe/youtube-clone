import React from 'react'
import "./sidebar.css";
import SidebarRow from "./SidebarRow.js"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';


function Sidebar() {
    return (
        <div className = "sidebar">
            <SidebarRow selected Icon = {HomeRoundedIcon} title = "Home"/>
            <SidebarRow Icon = {WhatshotRoundedIcon} title = "Trending"/>
            <SidebarRow Icon = {SubscriptionsRoundedIcon} title = "Subscription"/>
            <hr />
            <SidebarRow Icon = {VideoLibraryRoundedIcon} title = "Library" />
            <SidebarRow Icon = {HistoryRoundedIcon} title = "History" />
            <SidebarRow Icon = {OndemandVideoRoundedIcon} title = "Your Videos" />
            <SidebarRow Icon = {WatchLaterRoundedIcon} title = "Watch Later" />
            <SidebarRow Icon = {ThumbUpAltRoundedIcon} title = "Liked Videos" />
            <SidebarRow Icon = {ExpandMoreRoundedIcon} title = "Show More" />
            <hr />
            <SidebarRow Icon = {SettingsRoundedIcon} title = "Settings" />
            <SidebarRow Icon = {FlagRoundedIcon} title = "Report" />
            <SidebarRow Icon = {HelpRoundedIcon} title = "Help" />
            <SidebarRow Icon = {FeedbackRoundedIcon} title = "Feedback" />
        </div>
    )
}

export default Sidebar
