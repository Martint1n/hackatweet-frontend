import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Style from '../styles/HomeTwitter.module.css';
import AddTwitt from './addTwitt';
import Twitt from './Twitt';
import Hashtag from './Hashtag';
import { useSelector, useDispatch } from 'react-redux';
import { addUsernameToStore } from '../reducers/user';

function HomeTwitter() {
    const dispatch = useDispatch();

    const [twitts, setTwitts] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const username = useSelector((state) => state.value.username); // add username dans store depuis la page de connexion 
    const token = useSelector((state) => state.value.token); 

    useEffect(() => {
        fetch('http://localhost:3000/users/hashtag')
        .then(response => response.json())
        .then((data) => {
            console.log('data', data)
            setHashtags(data);
        })
    }, [])

    console.log(hashtags);
    console.log(token);

    const hashtag = hashtags.map((hashtag, i) => {
        return <Hashtag key={i} {...hashtag} />
    })

    useEffect(() => {
        fetch('http://localhost:3000/users/twitt')
        .then(response => response.json())
        .then(data => setTwitts(data))
    }, [])

    const twitt = twitts.map((twitt, i) => {
        return <Twitt key={i} {...twitt} />
    })


    const dataTestTwitt = [{
        avatar: '/avatar.jpeg',
        username: 'theLastAirBender',
        firstname: 'Aang',
        date: '1 sept',
        like: 2,
        twitt: 'When we hit our lowest point, we are open to the greatest change.'
    },
    {   
        avatar: '/hokutoNoKen.png',
        username: 'Hakuto No Ken',
        firstname: 'Ken',
        date: '0 sept',
        like: 1,
        twitt: 'お前はも死んでいる'
    },
{
    avatar: '/spiderman.webp',
    username: 'Spiderman',
    firstname: 'Peter',
    date: '22 sept',
    like: 1,
    twitt: 'With great power, there must also come great responsibility.'
}]

    // const twitts = dataTestTwitt.map((twitt) => {
    //     return <Twitt {...twitt} />
    // })

    return (
        <div class={Style.masterContainer}>
            <div class={Style.leftContainer}>
                <Image src='/logo.png' alt='logo' height={100} width={5} /> 
                <Image src='/avatar.jpeg' alt='avatar user' height={50} width={50} fill={false} sizes='5vw' />
            </div>
            <div class={Style.middleContainer}>
                <div class={Style.middleUpContainer}>
                    <div class={Style.title}>Home</div>
                    <AddTwitt username={username} token={token} /> 
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