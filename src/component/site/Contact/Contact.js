
import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className='container contact' style={{border: '1px solid red', marginBottom: 10, height: '100vh'}} id='Contact' >
                Contact
                <div className='row'>
                    <div style={{backgroundColor: 'red', height: 100}} className="col-1-of-4"></div>
                    <div style={{backgroundColor: 'red', height: 100}} className="col-1-of-4"></div>
                    <div style={{backgroundColor: 'red', height: 100 }} className="col-1-of-4"></div>
                    <div style={{backgroundColor: 'red', height: 100}} className="col-1-of-4"></div>
                </div>
            </div>
        )
    }
}

export default Contact
