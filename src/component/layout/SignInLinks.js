import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { MenuList, MenuItem, Avatar } from '@material-ui/core';
import firebase from '../../config/fbConfig'

const SignInLinks = ()=> {

    const handleOnClick = ()=>{
        firebase.default.auth().signOut();
    }

    return (
            <MenuList className='navigation' style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                <MenuItem  className="navigationList__item--Info">
                    <Link 
                    to="/info"
                    >
                        Informacje
                    </Link>
                </MenuItem>
                <MenuItem  className="navigationList__item--registration">
                    <Link 
                    to="/registration"
                    >
                        Zapisy
                    </Link>
                </MenuItem >
                <MenuItem className="navigationList__item--signOut" onClick={handleOnClick}>
                    Wyloguj
                </MenuItem>
                <Avatar className='orange'>NN</Avatar> 
                </MenuList>
    );
}
  
export default SignInLinks
