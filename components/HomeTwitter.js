import React from 'react';
import Style from '../styles/HomeTwitter.module.css';
import { useState } from 'react';
import AddTwitt from '../components/addTwitt';
import { useSelector, useDispatch } from 'react-redux';
import { addUsernameToStore } from '../reducers/user';

function HomeTwitter() {
    const dispatch = useDispatch();

    const [twitt, setTwitt] = useState('');
    const [twittHeight, setTwittHeight] = useState('auto');
    const username = useSelector((state) => state.value.username); // add username dans store depuis la page de connexion 



    const handleChange = (e) => {
        setTwitt(e.target.value);
        setTwittHeight (e.target.scrollHeight + 'px');
    }
    return (
        <div class={Style.masterContainer}>
            <div class={Style.leftContainer}></div>
            <div class={Style.middleContainer}>
                <div class={Style.middleUpContainer}>
                    <div class={Style.title}>Home</div>
                    <textarea
                        value={twitt}
                        onChange={handleChange}
                        style={{ resize: 'none', width: '80%', minHeight:'20px', maxHeight: '300px', height: twittHeight}}
                    /> 
                    <div class={Style.counter}>{twitt.length}/280</div>
                    <AddTwitt twitt={twitt} username={username}/>
                    <button></button>
                </div>
                <div class={Style.middleDownContainer}></div>
            </div>
            <div class={Style.rightContainer}></div>
        </div>
    )
}

export default HomeTwitter;