import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import "./Shop.css";

const Shop = () => {
    
    const [players,setplayers]=useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);

    
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setplayers(data))
    },[]);

    const handleAddToCart = (player) =>{
        const newCart = [...cart, player];
        console.log(newCart)
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
            <div >
                <Cart cart={cart} setCart={setCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;