import React from 'react'

export default function Header() {
    return ( 
        <nav className='blue'>
            <div className="nav-wrapper">
                <b className="brand-logo">ReactShop</b>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <i>REPO</i>
                </ul>
            </div>
        </nav>
    )
}