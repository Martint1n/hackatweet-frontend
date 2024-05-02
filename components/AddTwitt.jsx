import React, { useState } from 'react';
import Style from '../styles/HomeTwitter.module.css';

function AddTwitt(props) {
    const [twitt, setTwitt] = useState('');
    const [twittHeight, setTwittHeight] = useState('auto');

    const handleChange = (e) => {
        setTwitt(e.target.value);
        setTwittHeight (e.target.scrollHeight + 'px');
    }
    
    const sendTwitt = () => {
        if(!props.token){
            return;
        } 
        else{
            fetch('http://localhost:3000/users/twitt', {
                method: POST,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({twitt: props.twitt, username: props.username})
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