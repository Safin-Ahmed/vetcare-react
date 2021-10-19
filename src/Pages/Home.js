import React from 'react';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import OurTeam from '../components/OurTeam/OurTeam';
import Services from '../components/Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <OurTeam></OurTeam>
            <Contact></Contact>
        </>
    );
};

export default Home;