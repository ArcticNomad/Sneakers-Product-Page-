import React from 'react';

export default function Navbar(props)
{
    return(
        <nav className="navbar">

            <img src={props.Weblogo} className="logo" alt="logo" />
            <ul className="navbar-items">

                {props.navOptions.map((navOption, index) => (
                   <li className="nav-item" key={index}>
                       <a className="nav-link" href="/">{navOption}</a>
                   </li>
                ))}

            </ul>
            <img src={props.cart} onClick={props.cartClick} className="cart" alt="logo" />
            <img src={props.userAvatar} className="avatar" alt="logo" />


        </nav>
    )
}