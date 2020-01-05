import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import Navbar from './layout/Navbar';

export class Header extends Component {
    get divStyle(){
        return ({
            border: '1px solid red', 
            marginBottom: 10, 
            height: '10vh', 
            display:'flex',
            flexDirection: 'row', 
            alignItems:"center", 
            justifyContent: 'space-between',

        })
    }
    render() {
        return (
            <div style={this.divStyle}>
                <Link to='/' className="navigation__logo">Cut&Style</Link>
                <Navbar/>
            </div>
        )
    }
}

export default Header
