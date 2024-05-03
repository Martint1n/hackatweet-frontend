import React from 'react'
import Style from '../styles/HomeTwitter.module.css';


function Hashtag(props) {

    
    return (
        <div>
            <div class={Style.title}>{props.hashtag}</div>
            <div class={Style.title}>{props.twitt.length} twitts</div>
        </div>
    )
}

export default Hashtag