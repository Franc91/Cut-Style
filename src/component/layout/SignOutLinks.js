import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';

const SignInLinks = ()=> {
    return (
            <MenuList className='navigation' style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                <MenuItem  className="navigationList__item--signUp">
                    <Link 
                    to="/signup"
                    >
                       Rejestracja
                    </Link>
                </MenuItem>
                <MenuItem  className="navigationList__item--signIn">
                    <Link 
                    to="/signin"
                    >
                        Zaloguj
                    </Link>
                </MenuItem>
            </MenuList>
    );
}


export default SignInLinks;
