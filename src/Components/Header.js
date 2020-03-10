import React from 'react';

import './Header.css'
import Logo from '../assets/logo-ct-green-full.png';

function Header() {
    return (
        <div className="CT-Header">
            <img className="CT-Header__logo" src={Logo}></img>
        </div>
    )
}

export default Header;