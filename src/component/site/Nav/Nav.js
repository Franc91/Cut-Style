import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { MenuList, MenuItem } from '@material-ui/core';
import Popup from "reactjs-popup";
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

class Nav extends Component {
    render() {
        return (
            <nav className="navigation__nav" style={{border: '1px solid red', margin: 10, height: '5vh', display:'flex', alignItems:'center' }}>
                <MenuList className='navigation' style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                    <MenuItem  className="navigationList__item">
                        <Link 
                        activeClass="active"
                        to="AboutUs"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={0}
                        >
                            O Nas
                        </Link>
                    </MenuItem>
                    <MenuItem  className="navigationList__item">
                        <Link 
                        activeClass="active"
                        to="Price"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        delay={0}
                        >
                            Cennik
                        </Link>
                    </MenuItem >
                    <MenuItem  className="navigationList__item">
                        <Link 
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        delay={0}
                        >
                            Kontakt
                        </Link>
                    </MenuItem>
                    <Popup trigger={<MenuItem className="navigationList__item--SignUn"> Rejestracja </MenuItem>} modal>
                        {
                            close=>(
                                <SignUp/>
                            )
                        }
                    </Popup>
                    <Popup
                    trigger={<MenuItem className="navigationList__item--SignIn"> Logowanie </MenuItem>} 
                    modal
                    closeOnDocumentClick
                    >
                        {
                            <SignIn/>                    
                        }
                    </Popup>
                </MenuList>    
            </nav>
        );
    }
}


export default Nav
