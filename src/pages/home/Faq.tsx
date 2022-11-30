import React, {useEffect} from 'react';
import faqLogo1 from "../../assets/img/faqlogo1.svg"
import faqLogo2 from "../../assets/img/faqlogo2.svg"
import faqLogo3 from "../../assets/img/faqlogo3.svg"
import iphone from "../../assets/img/iPhonel.png"
import hand2 from "../../assets/img/handr.png"
import {Fragment, useState} from "react";
import {Accordion, AccordionHeader, AccordionBody,} from "@material-tailwind/react";
import AOS from "aos";


class Icon extends React.Component<{ id: any, open: any }> {
    render() {
        let {id, open} = this.props;
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                    id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
        );
    }
}

const Faq = () => {
    const [open, setOpen] = useState(0);
    const [scroll, setScroll] = useState(0);
    const handleOpen = ({value}: { value: any }) => {
        setOpen(open === value ? 0 : value);
    };
    useEffect(() => {
        AOS.init()
    }, [])

    window.addEventListener("scroll", () => {
        setScroll(window.scrollY)
    })

    return (
        <section id="faq" className="overflow-hidden">
            <div className="container mx-auto">
                <div className="faq flex items-start justify-between  relative py-10 max-md-[320px]:flex-wrap ">
                    <div className="">
                        <h1 className="font-bold text-7xl tracking-tight mb-14">How it works</h1>
                        <div className="flex items-center">
                            <div className="flex items-center justify-center flex-col mr-16">
                                <img src={faqLogo1} alt="img"/>
                                <h5 className="mt-3.5">Tap your card</h5>
                            </div>
                            <div className="flex items-center justify-center flex-col mr-16">
                                <img src={faqLogo2} alt="img"/>
                                <h5 className="mt-3.5">Tap your card</h5>
                            </div>
                            <div className="flex items-center justify-center flex-col mr-16">
                                <img src={faqLogo3} alt="img"/>
                                <h5 className="mt-3.5">Tap your card</h5>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-3xl text-[#B3B3B3] text-center w-[387px] py-10">FAQ</h1>
                            <div className="border-l-2 pl-2.5">
                                <Fragment>
                                    <div
                                        className="w-[387px] bg-[#1A1919] mb-2.5  rounded rounded-tr-[30px] flex items-center justify-center flex-col">
                                        <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
                                            <div className="px-3 bg-transparent">
                                                <AccordionHeader onClick={() => handleOpen({value: 1})}
                                                                 className='bg-transparent'>
                                                    • How to customize the card?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#333333] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    • How to share with my card?
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div
                                        className="w-[387px] bg-[#1A1919] mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 2} icon={<Icon id={2} open={open}/>}>
                                            <div className="px-3 bg-transparent">
                                                <AccordionHeader onClick={() => handleOpen({value: 2})}
                                                                 className='bg-transparent text-left'>
                                                    • How to use a cards and <br/> what we can add?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#333333] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div
                                        className="w-[387px] bg-[#1A1919] mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 3} icon={<Icon id={3} open={open}/>}>
                                            <div className="px-3 bg-transparent">
                                                <AccordionHeader onClick={() => handleOpen({value: 3})}
                                                                 className='bg-transparent text-left'>
                                                    • How to share with my card?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#333333] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div
                                        className="w-[387px] bg-[#1A1919] mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 4} icon={<Icon id={4} open={open}/>}>
                                            <div className="px-3 bg-transparent">
                                                <AccordionHeader onClick={() => handleOpen({value: 4})}
                                                                 className='bg-transparent text-left'>
                                                    • Any additional chages?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#333333] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div
                                        className="w-[387px] bg-[#1A1919] mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 5} icon={<Icon id={5} open={open}/>}>
                                            <div className="px-3 bg-transparent">
                                                <AccordionHeader onClick={() => handleOpen({value: 5})}
                                                                 className='bg-transparent text-left'>
                                                    • How long does delivery take?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#333333] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div
                                        className="w-[387px] bg-[#1A1919] mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 6} icon={<Icon id={6} open={open}/>}>
                                            <div className="px-3 bg-transparent">
                                                <AccordionHeader onClick={() => handleOpen({value: 6})}
                                                                 className='bg-transparent text-left'>
                                                    • Is there a product warranty?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#333333] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <Accordion open={open === 7} icon={<Icon id={7} open={open}/>}
                                               className="w-[387px] bg-[#1A1919] mb-2.5 px-2.5 rounded rounded-br-[30px]">
                                        <AccordionHeader onClick={() => handleOpen({value: 7})}>
                                            • What is privacy policy?
                                        </AccordionHeader>
                                        <AccordionBody>
                                            We're not always in the position that we want to be at. We're
                                            constantly growing. We're constantly making mistakes. We're constantly
                                            trying to express ourselves and actualize our dreams.
                                        </AccordionBody>
                                    </Accordion>
                                </Fragment>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="border-l-2 flex items-start pl-2.5">
                            <h1>•</h1>
                            <h1 className="pl-2.5 md:text-[12, px]">Choose your design & personalize with your own <br/> company logo. The logo
                                will be
                                engraved into the <br/> metal card.</h1>

                        </div>
                        <div className="">
                            <img src={iphone} alt="img" className="absolute right-[-152px] top-40"
                                 data-aos="fade-down"
                                 data-aos-easing="linear"
                                 data-aos-duration="1500"/>
                            <img src={hand2} alt="img" className="absolute right-[-150px] bottom-0 w-[65%]"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1500"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Faq;