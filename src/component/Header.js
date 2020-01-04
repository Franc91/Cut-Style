import React, { Component } from 'react';
import Nav from './Nav'
import {ThemeContext} from '../contexts/ThemeContext'

export class Header extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? dark : light;
        return (
            <div style={{border: '1px solid red', marginBottom: 10, height: '10vh', display:'flex', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center',backgroundColor: theme.bg, color: theme.syntax }}>
                <Nav />
            </div>
        )
    }
}

export default Header
