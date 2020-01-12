import React  from 'react';
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';

const Navbar = ({ user, setUser }) =>{

    return ( 
        <nav className="navigation__nav" style={{border: '1px solid red',  margin: '1rem,0,1rem,1rem', height: '5vh', display:'flex', alignItems:'center', justifyContent: "space-around" }}>
            {
                user ? <SignInLinks setUser={setUser} user={user} /> : <SignOutLinks/>
            } 

        </nav>    
        );
}

 
export default Navbar;