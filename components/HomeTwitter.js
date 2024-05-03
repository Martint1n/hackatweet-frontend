import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Style from '../styles/HomeTwitter.module.css';
import AddTwitt from './addtwitt';
import Twitt from './Twitt';
import Hashtag from './Hashtag';
import { useSelector, useDispatch } from 'react-redux';
import { addUsernameToStore } from '../reducers/user';

function HomeTwitter() {
    const dispatch = useDispatch();

    const [twitts, setTwitts] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const username = useSelector((state) => state.user.value.username); // add username dans store depuis la page de connexion 
    const token = useSelector((state) => state.user.value.token); 

    // useEffect(() => {
    //     fetch('http://localhost:3000/users/hashtag')
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log('data', data)
    //         setHashtags(data);
    //     })
    // }, [{ hashtag }])

    const hashtag = hashtags.map((hashtag, i) => {
        return <Hashtag key={i} {...hashtag} />
    })

    useEffect(() => {
        fetch('http://localhost:3000/users/twitt')
        .then(response => response.json())
        .then((data) => {
        console.log('dataTwitts', data)
        setTwitts(data)
        })
    }, [])

    const twitt = twitts.map((twitt, i) => {
        return <Twitt key={i} {...twitt} />
    })

    return (
        <div class={Style.masterContainer}>
            <div class={Style.leftContainer}>
                <Image src='/logo.png' alt='logo' height={100} width={5} /> 
                <Image src='/avatar.jpeg' alt='avatar user' height={50} width={50} fill={false} sizes='5vw' />
            </div>
            <div class={Style.middleContainer}>
                <div class={Style.middleUpContainer}>
                    <div class={Style.title}>Home</div>
                    <AddTwitt username={username} token={token} avatar={'/avatar.jpeg'} firstname={'martin'} /> 
                </div>
                <div class={Style.middleDownContainer}>
                    { twitt }
                </div>
            </div>
            <div class={Style.rightContainer}>
                <div class={Style.title}>Trends</div>
                <div>
                    { hashtag }
                </div>
            </div>
        </div>
    )
}

export default HomeTwitter;