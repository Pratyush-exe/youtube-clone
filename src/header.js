import React, {useState} from 'react'
import "./header.css";
import Avatar from '@material-ui/core/Avatar';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import { Link } from "react-router-dom";

function Header() {

    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">

            <div className = "header_left">
                <MenuRoundedIcon className = "Hamburger"/>
                <Link to="/">
                    <img
                        className = "header_logo" 
                        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" 
                        alt = ""/>
                </Link><p className = "clone" >CLONE</p>
            </div>
            
            <div className = "header_input">
                <input onChange ={e => setInputSearch(e.target.value)} value ={inputSearch} placeholder = "Search" type = "text" />

                <Link to = {`/search/${inputSearch}`}>
                    <SearchRoundedIcon className = "header_inputButton" />
                </Link>

            </div>
            
            <div className = "header_icons">
                <VideoCallRoundedIcon className = "header_icon" />
                <AppsRoundedIcon className = "header_icon" />
                <NotificationsRoundedIcon className = "header_icon" />
                <a href = "https://github.com/Pratyush-exe">
                <Avatar
                    className = "mydp"
                    alt = "dp"
                    src = "https://lh3.googleusercontent.com/ogw/ADGmqu-4100pIiLWPaq0TpfzRJZ1ipAEhRwehU3hs9yKcw=s32-c-mo" /></a>
            </div>

        </div>
    );
}

export default Header
