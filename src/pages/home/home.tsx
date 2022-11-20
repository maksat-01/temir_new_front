import React from 'react';
import HomeHero from "./homeHero";
import SmartWay from './SmartWay';
import QrCode from './QrCode';
import ThreeNumber from './ThreeNumber';

const Home = () => {
    return (
        <>
            <HomeHero/>
            <SmartWay/>
            <QrCode/>
            <ThreeNumber/>
        </>
    );
};

export default Home;