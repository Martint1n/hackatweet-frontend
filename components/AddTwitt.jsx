import React from 'react';

function AddTwitt(props) {

    const sendTwitt = () => {
        if(!props.token){
            return;
        } 
        else(props.token){
            fetch('http://localhost:3000/users/twitt', {
                method: POST,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({twitt: props.twitt, username: props.username})
            })
        }
    }

    return (
        <button onClick={sendTwitt}>Twitt</button>
    )
}

export default AddTwitt;