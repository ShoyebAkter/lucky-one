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
                <div className='question'>React works in declarative code. To show what we mean by declarative code,
                     we want you to imagine the following code expressed as an app.
                      What you picture could look like the screen below, with a navbar, a header, a filter, and a list.
                     That's because each line of code declares what each element of the app is.</div>
        </div>
    );
};

export default Cart;