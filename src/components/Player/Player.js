import React from 'react';
import "./Player.css"

const Player = (props) => {
    const {photo,age,name}=props.player;
    return (
        <div className='player'>
            <img src={photo} alt=""></img>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
};

export default Player;