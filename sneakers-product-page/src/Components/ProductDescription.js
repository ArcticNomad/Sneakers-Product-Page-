import React, {useState} from "react";
import description from "../assets/description.json";

export default function ProductDescription(props)
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
            <article className="description">
                <div className="companyName">
                    <p>{props.company}</p>
                </div>
                <div className="name">
                    <h1>{props.name}</h1>
                </div>

                <div className="productDescription">
                    <p>{props.description}</p>
                </div>
                <div className="priceSection">
                    <div className="price">
                        <strong>
                            {"$" + props.price}
                        </strong>
                    </div>
                    <div className="discount">
                        <strong>
                            {props.discount}
                        </strong>
                    </div>
                </div>
                <div className="buttons">
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
                            <img src={props.cart} alt="cart"/>
                            Add To Cart
                        </button>

                    </div>
                </div>
            </article>
        </>
    )
}