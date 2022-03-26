import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import "./Shop.css";

const Shop = () => {
    const [players,setplayers]=useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setplayers(data))
    },[]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='container'>
            <div className='players-container'>
                {
                    players.map(player=><Player
                    key={player.id}
                    player={player}
                    handleAddToCart={handleAddToCart}
                    ></Player>)
                }
            </div>
            <div className='players-cart'>
            <h4>Selected player</h4>
                <div >
                    <button className='choose'> Choose 1 player</button>
                </div>
                <div>
                    <button className='reset'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;