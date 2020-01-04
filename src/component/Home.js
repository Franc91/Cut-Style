import React from 'react';
import Header from './Header'
import AboutUs from './AboutUs'
import Price from './Price'
import Contact from './Contact';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

const Home = () => {
    return (
        <div className='container Home'>
                <Header />
                <AboutUs />
                <Price />
                <Contact />
                <Footer />
                <ThemeToggle/>
        </ div>
    );
}



export default Home;