import React from 'react';
import {useState} from 'react'
import description from '../assets/description.json';
export default function AddToCartButton(props)
{
    const[quantity, setQuantity] = useState(0)

    function onIncreaseClick()
    {
        setQuantity(quantity+1);
        description.quantity = quantity+1;
    }
    function onDecreaseClick()
    {
        if (quantity === 0){
            return false;

        }
        else if (quantity > 0){
            setQuantity(quantity-1);
            description.quantity = quantity-1;
        }
    }

    return (
        <>

            <div className="quantityControls">
                <button className="decrease" onClick={onDecreaseClick}>
                    -
                </button>
                <span className="quantity">
                    {quantity}
                </span>
                <button className="increase" onClick={onIncreaseClick}>
                    +
                </button>

            </div>

            <div className="addToCartButton">
                <button className="addToCart">
                <img src={props.cartLogo} alt="cart"/>
                    Add To Cart
                </button>

            </div>
        </>
    )
}