import React from 'react';
import HomeHero from "./homeHero";
import SmartWay from './SmartWay';
import QrCode from './QrCode';
import ThreeNumber from './ThreeNumber';
import MallEmirate from './MallEmirate';
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <HomeHero/>
            <SmartWay/>
            <QrCode/>
            <ThreeNumber/>
            <Contact/>
            <MallEmirate/>
            <Footer/>
        </>
    );
};

export default Home;