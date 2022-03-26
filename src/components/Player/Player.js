import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Player.css"

const Player = ({player,handleAddToCart}) => {
    const {photo,age,name}=player;
    console.log(photo)
    return (
        <div className='player'>
            <img src="photos/messi.jpg" alt=""></img>
            <div className='player-info'>
            <p className='player-name'>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
        <button onClick={() => handleAddToCart(player)} className='btn'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Player;