import React  from 'react';
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';

const Navbar = ({ user, setUser }) =>{

    return ( 
        <nav className="navigation__nav" style={{margin: '2rem', height: '5vh', display:'flex', alignItems:'center', justifyContent: "space-around", }}>
            {
                user ? <SignInLinks setUser={setUser} user={user} /> : <SignOutLinks/>
            } 

        </nav>    
        );
}

 
export default Navbar;