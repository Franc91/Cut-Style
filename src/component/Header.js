import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Navbar from './layout/Navbar';
import background from '../img/Free_Sample_By_Wix (1).jpeg'
import { fontFamily, fontStyle } from '@material-ui/system';

const Header = ({ user, setUser}) => {
    const divStyle={
            marginBottom: 10, 
            height: '10vh', 
            display:'flex',
            flexDirection: 'row', 
            alignItems:"center", 
            justifyContent: 'space-between',
            backgroundColor: '#ACB6BF',
            borderRadius: '2rem'
    }

    return (
        <div style={divStyle}>
            <Link to='/' className="navigation__logo">Cut & Style</Link>
            <Navbar user={user} setUser={setUser}/>
        </div>
    )
}

export default Header
