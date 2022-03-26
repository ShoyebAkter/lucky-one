import React, { useState } from 'react';
// import Button from '../Button/Button';
import "./Cart.css"

const Cart = (props) => {
    const {cart,chooseOne,reload,newOne}=props;
    
    
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

            <div className='choosen'>
                <p >Chosen player</p>
                {
                    <div>{newOne.name}</div>
                }
                <button onClick={chooseOne}   className='choose'> Choose Favourite player</button>
                </div>
                <div>
                    <button onClick={reload}  className='reset'>Choose Again</button>
                </div>
                
        </div>
    );
};

export default Cart;