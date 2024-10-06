import React from 'react';

export default function Navbar(props)
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <img src={props.Weblogo} className="img-fluid" alt="logo" />
            <ul className="navbar-nav mr-auto">

                {props.navOptions.map((navOption, index) => (
                   <li className="nav-item" key={index}>
                       <a className="nav-link" href="/">{navOption}</a>
                   </li>
                ))}

            </ul>
            <img src={props.cart} onClick={props.cartClick} className="img-fluid" alt="logo" />
            <img src={props.userAvatar} className="img-fluid" alt="logo" />


        </nav>
    )
}