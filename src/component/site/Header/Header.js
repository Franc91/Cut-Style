import React, { Component } from 'react';
import Nav from '../Nav'


export class Header extends Component {
    render() {
        return (
            <div style={{border: '1px solid red', marginBottom: 10, height: '10vh', display:'flex', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center'}}>
                <Nav />
            </div>
        )
    }
}

export default Header