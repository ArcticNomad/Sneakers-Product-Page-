import React from "react";

export default function productDescription(props)
{
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
                            {"$"+props.price}
                        </strong>
                    </div>
                    <div className="discount">
                        <strong>
                            {props.discount}
                        </strong>
                    </div>
                </div>
            </article>
        </>
    )
}