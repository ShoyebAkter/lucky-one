import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import "../Shop/Shop.css";

const Shop = () => {
    const [players,setplayers]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setplayers(data))
    },[]);
    return (
        <div className='container'>
            <div className='players-container'>
                {
                    players.map(player=><Player
                    key={player.id}
                    player={player}
                    ></Player>)
                }
            </div>
            <div className='players-cart'>
                <p>This is cart</p>
            </div>
        </div>
    );
};

export default Shop;