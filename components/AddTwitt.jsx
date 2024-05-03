import React, { useState } from 'react';
import Style from '../styles/HomeTwitter.module.css';

function AddTwitt(props) {
    const [twitt, setTwitt] = useState('');
    const [twittHeight, setTwittHeight] = useState('auto');

    const handleChange = (e) => {
        setTwitt(e.target.value);
        setTwittHeight (e.target.scrollHeight + 'px');
        console.log('token: ', props.token)
        console.log('username', props.username)
    }
    
    const sendTwitt = () => {
        if(!props.token){
            console.log('token: ', props.token)
            console.log('username', props.username)
            return;
        } 
        else{
            fetch(`http://localhost:3000/users/twitt/${props.username}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ twitt: twitt, firstname: 'test', avatar: props.avatar})
            })
            .then(response => response.json())
            .populate('twitt')
            .then(data => {
                console.log('twitt', data)
                props.updateOnClickAddTwitt(data.twitt)
            })
        }
    }

    return (
        <div>
        <textarea
            value={twitt}
            onChange={handleChange}
            style={{ resize: 'none', width: '80%', minHeight:'20px', maxHeight: '300px', height: twittHeight}}
            /> 
            <div class={Style.counter}>{twitt.length}/280</div>
            <button onClick={sendTwitt}>Twitt</button>
        </div>
    )
}

export default AddTwitt;