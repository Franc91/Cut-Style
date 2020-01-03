
import React, { Component } from 'react'


export class Map extends Component {
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
            <div style={this.divStyle} className="map col-2-of-4">
                <h2>Mapa dojazdu do salonu</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10244.567189502908!2d18.40449348379769!3d50.06490604330752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711453de1e5753f%3A0x9304c46380f61dde!2sLoranc%20Katarzyna.%20Zak%C5%82ad%20fryzjerski!5e0!3m2!1spl!2spl!4v1578072192320!5m2!1spl!2spl" width="75%" height="50%" style={{outline: "none", border: "0"}} title="googleMaps"></iframe>
            </div>
        )
    }
}

export default Map
