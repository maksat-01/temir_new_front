import React from 'react';
import HomeHero from "./homeHero";
import SmartWay from './SmartWay';
import QrCode from './QrCode';
import ThreeNumber from './ThreeNumber';
import MallEmirate from './MallEmirate';
import Contact from "./Contact";
import Footer from "./Footer";
import Faq from "./Faq";

const Home = () => {
    return (
        <>
            <HomeHero/>
            <SmartWay/>
            <Faq/>
            <QrCode/>
            <ThreeNumber/>
            <Contact/>
            <MallEmirate/>
            <Footer/>
        </>
    );
};

export default Home;