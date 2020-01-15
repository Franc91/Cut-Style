import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Navbar from './layout/Navbar';

const Header = ({ user, setUser}) => {

    return (
        <div className='header headerStyle'>
            <Link to='/' className="navigationLogo">Cut & Style</Link>
            <Navbar user={user} setUser={setUser}/>
        </div>
    )
}

export default Header
