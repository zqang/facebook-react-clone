import React from 'react';

import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='left-nav'>
                <img alt='logo' src='#'/>
                <input type="search"/>
            </div>
            <div className='mid-nav'>
                <ul className='list-button'>
                    <li>Home</li>
                    <li>Watch</li>
                    <li>Market</li>
                    <li>Group</li>
                    <li>Game</li>
                </ul>
            </div>
            <div className='right-nav'>
                <div className='profile'>
                    <img alt='profile pic' src='#'/>    
                    <h5>profile name</h5>
                </div>
                <div className='other-button'>
                    <span>Create Post</span>
                    <span>Messenger</span>
                    <span>Dropdown Menu</span>
                </div>
            </div>
        </div>
    )
};

export default Header;
