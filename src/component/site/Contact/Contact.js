
import React, { Component } from 'react';
import Map from './Map';
import ContactInfo from './ContactInfo';

export class Contact extends Component {
    get divStyle(){
        return({
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        })
    }
    render() {
        return (
            <div className='container contact' style={{border: '1px solid red', marginBottom: 10, height: '100vh'}} id='Contact' >
                Contact
                <div className='row' style={this.divStyle}>
                    <Map className="col-3-of-4"/>
                    <ContactInfo className="col-2-of-4"/>
                </div>
            </div>
        )
    }
}

export default Contact
