import React, { useState } from 'react';
// import Button from '../Button/Button';
import "./Cart.css"

const Cart = (props) => {
    const {cart}=props;
    const[newOne,setNewOne]=useState([]);
    console.log(cart);
    const chooseOne=()=>{
        const num=Math.floor(Math.random()*3);
        newOne=[cart[num]];
        <div>{newOne.name}</div>
        
    }
    const reload=()=>{
        reload=window.location.reload()
    }
    
    return (
        <div className='players-cart'>
            <h4>Selected player</h4>
            <div>{cart.length===0 && <div>Cart is empty</div>}</div>
            {
                cart.map((player)=>(
                    <div key={player.id} cart={cart}>
                        <p>{player.name}</p>
                    </div>
                ))
            }
            <div>{cart.length>4 && <div>{alert("can not add more than 4 player")}</div>}</div>
            <div >
                <button onClick={chooseOne}   className='choose'> Choose 1 player</button>
                </div>
                <div>
                    <button onClick={reload}  className='reset'>Choose Again</button>
                </div>
        </div>
    );
};

export default Cart;