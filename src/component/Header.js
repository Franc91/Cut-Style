import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Navbar from './layout/Navbar';

const Header = ({ user, setUser}) => {
    const divStyle={
            border: '1px solid red', 
            marginBottom: 10, 
            height: '10vh', 
            display:'flex',
            flexDirection: 'row', 
            alignItems:"center", 
            justifyContent: 'space-between',
    }

    return (
        <div style={divStyle}>
            <Link to='/' className="navigation__logo">Cut&Style</Link>
            <Navbar user={user} setUser={setUser}/>
        </div>
    )
}

export default Header
