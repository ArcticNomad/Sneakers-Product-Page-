import React from "react";

export default function productDescription(props)
{
    return (
        <>
            <article>
                <div className="companyName">
                    <h2>{props.company}</h2>
                </div>
                <div className="name"></div>
                <h1>{props.name}</h1>
                <div className="productDescription">
                    <h3>{props.description}</h3>
                </div>
                <div className="price">
                    <strong>
                        {props.price}
                    </strong>
                </div>
                <div className="discount">
                    <strong>
                        {props.discount}
                    </strong>
                </div>

            </article>
        </>
    )
}