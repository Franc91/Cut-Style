import React, { Component } from 'react'

class ContactInfo extends Component {
    get divStyle(){
        return({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        })
    }
    render() {
        return (
            <div className="contactInfo col-2-of-4" style={this.divStyle}>
                <ul>
                    <li>Cut&StyleStudio</li>
                    <li>Kate Lorenc</li>
                    <li>Generała Józefa Bema 19</li>
                    <li>44-280 Rydułtowy</li>
                </ul>
                
            </div>
        )
    }
}

export default ContactInfo
