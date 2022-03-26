import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import "./Shop.css";

const Shop = () => {
    
    const [players,setplayers]=useState([]);
    const [cart, setCart] = useState([]);
    let[newOne,setNewOne]=useState([]);
    console.log(cart);
    const chooseOne=()=>{
        const num=Math.floor(Math.random()*4);
        console.log(num)
        newOne=cart[num];
        setNewOne(newOne);
    }
    const reload=()=>{
        const newCart=[];
        setCart(newCart);
        setNewOne(newCart);
    }

    
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setplayers(data))
    },[]);

    const handleAddToCart = (player) =>{
        let newCart=[];
        const exist =cart.find(selectedPlayer=>selectedPlayer.id===player.id)
        if(cart.length>3){
            alert("only 4 items are accepted");
            newCart = [...cart, player];
        }else if(!exist){
            newCart=[...cart,player];
        }else{
            newCart=[...cart];
        }
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
                <Cart cart={cart} chooseOne={chooseOne}
                  reload={reload} newOne={newOne}
                   setCart={setCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;