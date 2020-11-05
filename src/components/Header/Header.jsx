import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className='menu'>
                <NavLink to='/Feed' className='menu__item'>Feed</NavLink>
                <NavLink to='/Messages' className='menu__item'>Messages</NavLink>
            </nav>
        </header>
    )
}

export default Header;