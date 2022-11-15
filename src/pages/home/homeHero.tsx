import React from 'react';
// @ts-ignore
import temir from "../../assets/img/temir.png";
// @ts-ignore
import iphone from "../../assets/img/iphone.png";

const HomeHero = () => {
    return (
        <section id='hero'>
            <div className="container">
                <div className='hero flex justify-center flex-col items-center pt-40'>
                    {/*<h1 className='text-white text-7xl text-center pt-20'>Smart interface</h1>*/}
                    {/*<ul className='flex w-[400px] justify-between pt-5'>*/}
                    {/*    <li>High quality products</li>*/}
                    {/*    <li>Convenient to use</li>*/}
                    {/*</ul>*/}
                    <img src={temir} alt="img"/>
                    <img src={iphone} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;