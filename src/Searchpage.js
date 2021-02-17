import React from 'react'
import "./Searchpage.css"
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import Channelrow from "./Channelrow.js"
import Videorow from "./videorow.js"

let channel="Kurzgesagt – In a Nutshell"

function Searchpage() {
    return (
        <div className = "Searchpage">
            <div className = "Searchpage_filter">
                <TuneRoundedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <Channelrow 
                image = "//yt3.ggpht.com/ytc/AAUvwni0qypqyutMh6y46sP2irpEHYdE9WXaH0_SuA60FA=s176-c-k-c0x00ffffff-no-rj-mo"
                Channel = "Kurzgesagt – In a Nutshell"
                verified
                subs = "14.1M"
                videosnum = {135}
                descp = "Videos explaining things with optimistic nihilism. We are a small team who want to make science look beautiful. Because it is beautiful"
            />
            <hr />

            <h2 className = "latest_text" >Latest from {channel}</h2>

            <Videorow 
                views="4.3M"
                descp="Nuclear energy creates an uneasy feeling of danger for many people: ancient and dangerous minerals are concentrated to ..."
                timestamp="1 week ago"
                title="How Many People Did Nuclear Energy Kill? Nuclear Death Toll"
                image="https://i.ytimg.com/vi/Jzfpyo-q-RM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAr4kV2Cqobijq5a7lRsnDzjWB5Jg" />
            
            <Videorow 
                views="7.1M"
                descp="What would happen if we were to detonate a very very powerful nuclear weapon on the moon? Would the explosion knock its orbit ..."
                timestamp="2 months ago"
                title="What if We Nuke the Moon?"
                image="https://i.ytimg.com/vi/qEfPBt9dU60/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0ohxcc8-q5EaOcUZziYb-snZZZQ" />
            
            <Videorow 
                views="11M"
                descp="What if there is a way to destroy the universe so fundamentally that life as we know it will be impossible forever? OUR CHANNELS ..."
                timestamp="4 years ago"
                title="The Most Efficient Way to Destroy the Universe – False Vacuum"
                image="https://i.ytimg.com/vi/ijFm6DxNVyI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQgRdPrGWlQs5Z6_InjN53i-jJZQ" />
            
            <Videorow 
                views="14M"
                descp="What is the largest star in the Universe? And why is it that large? And what ARE stars anyway? OUR CHANNELS ..."
                timestamp="4 months ago"
                title="The Largest Star in the Universe – Size Comparison"
                image="https://i.ytimg.com/vi/3mnSDifDSxQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsWu08dLtkPqH69xr-LWm3sHUKPg" />
            
            <Videorow 
                views="6.4M"
                descp="This video was made possible by a grant from the Templeton World Charity Foundation. Sources & further reading: ..."
                timestamp="7 months ago"
                title="What Is Intelligence? Where Does it Begin?"
                image="https://i.ytimg.com/vi/ck4RGeoHFko/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8MpngUZdpErwP_8mWZ4wqbrOC3g" />
            
            <Videorow 
                views="4.9M"
                descp="By the end of the 21st century, humanity is becoming desperate. Decades of heatwaves and droughts have led to unusually poor ..."
                timestamp="3 months ago"
                title="Geoengineering: A Horrible Idea We Might Have to Do"
                image="https://i.ytimg.com/vi/dSu5sXmsur4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7KLSp3620hllZKMtoh0WfA13Y0g" />
            
            <Videorow 
                views="7.2M"
                descp="What are the principles behind Homeopathy and does it work? Sources & further reading: ..."
                timestamp="2 years ago"
                title="Homeopathy Explained – Gentle Healing or Reckless Fraud?"
                image="https://i.ytimg.com/vi/8HslUzw35mc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0YuElz7mygN_MTW0PjZ1igiASSg" />
            
            <Videorow 
                views="18M"
                descp="A war has been raging for billions of years, killing trillions every single day, while we don't even notice. This war involves the ..."
                timestamp="2 years ago"
                title="The Deadliest Being on Planet Earth – The Bacteriophage"
                image="https://i.ytimg.com/vi/YI3tsmFsrOg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNnHFibqiSLAt4747XM62QWczqYg" />
            
            <Videorow 
                views="11M"
                descp="What would happen to you if a black hole the size of a coin suddenly appeared in your pocket? Lets find out! Check out www."
                timestamp="5 years ago"
                title="What if there was a black hole in your pocket?"
                image="https://i.ytimg.com/vi/8nHBGFKLHZQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxU3YTwMX63_COWEnDqVVGsrBy4Q" />
            
            <Videorow 
                views="15M"
                descp="What is something? On the most fundamental level thinkable, what are things? Why are things? And why do things behave the ..."
                timestamp="2 years ago"
                title="Wormholes Explained – Breaking Spacetime"
                image="https://i.ytimg.com/vi/9P6rdqiybaw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6P78kLdzk3hWC-multjkHEL7fGA" />

        </div>
    )
}

export default Searchpage
