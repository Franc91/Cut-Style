import React, { Component } from 'react';
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';

class Navbar  extends Component {
    get divStyle (){
        return({
            display: 'flex',
            flexDirection: 'row',
            alignItem: 'center'
        })
    }
    render() { 
        return ( 
            <nav className="navigation__nav" style={{border: '1px solid red',  margin: '1rem,0,1rem,1rem', height: '5vh', display:'flex', alignItems:'center', justifyContent: "space-around" }}>
                <SignOutLinks/>
                <SignInLinks />
            </nav>    
         );
    }
}

 
export default Navbar;