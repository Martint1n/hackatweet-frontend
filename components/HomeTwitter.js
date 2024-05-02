import React from 'react';
import Style from '../styles/HomeTwitter.module.css';
import AddTwitt from './addTwitt';
import Twitt from './Twitt'
import { useSelector, useDispatch } from 'react-redux';
import { addUsernameToStore } from '../reducers/user';

function HomeTwitter() {
    const dispatch = useDispatch();

    const username = useSelector((state) => state.username); // add username dans store depuis la page de connexion 
    const token = useSelector((state) => state.token);

    const dataTestTwitt = {
        avatar: '/avatar.jpeg',
        username: 'Cèdre',
        firstname: 'Cédric',
        date: '1 sept',
        like: 2,
        twitt: 'le twitt de malade qui va venir soonTM'
    }

    return (
        <div class={Style.masterContainer}>
            <div class={Style.leftContainer}></div>
            <div class={Style.middleContainer}>
                <div class={Style.middleUpContainer}>
                    <div class={Style.title}>Home</div>
                    <AddTwitt username={username} token={token} /> 
                </div>
                <div class={Style.middleDownContainer}>
                    <Twitt {...dataTestTwitt} />
                </div>
            </div>
            <div class={Style.rightContainer}></div>
        </div>
    )
}

export default HomeTwitter;