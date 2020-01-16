import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';

const SignInLinks = ()=> {

    const btnStyle={
        fontSize: '2rem',
        color: '#393D40',
        borderRadius: '2rem'

    }
    const linkStyle = {
        textDecoration:'none', 
        fontSize: '2rem',
        color: '#393D40'
    }

    return (
            <MenuList className='navigation' style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                <MenuItem style={btnStyle} className="navigationList__item--signUp">
                    <Link 
                    style={linkStyle}
                    to="/signup"
                    >
                       Rejestracja
                    </Link>
                </MenuItem>
                <MenuItem style={btnStyle} className="navigationList__item--signIn">
                    <Link 
                    style={linkStyle}
                    to="/signin"
                    >
                        Zaloguj
                    </Link>
                </MenuItem>
            </MenuList>
    );
}


export default SignInLinks;
