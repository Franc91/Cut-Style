import React, { Component } from 'react';
import Header from '../Header'
import AboutUs from '../AboutUs'
import Price from '../Price'
import Contact from '../Contact';
import Footer from '../Footer'

class Home extends Component {
    render() {
        return (
            <>
            <Header />
            <AboutUs />
            <Price />
            <Contact />
            <Footer />
            </>
        );
    }
}



export default Home;