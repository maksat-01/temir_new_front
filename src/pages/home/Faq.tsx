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
        <section id="faq">
            <div className="container">
                {/*ml-[150px] mt-[100px] w-[100%]*/}
                <h1 className="font-bold text-7xl tracking-tight mb-14 max-md:text-6xl max-[391px]:text-[40px] max-[391px]:pb-20">How it works</h1>
                <div className="flex items-start justify-between relative py-10 flex-wrap ">
                    <div className="max-[391px]:block max-[834px]:flex max-[834px]:flex-row-reverse max-[834px]:items-start max-[834px]:justify-between max-[834px]:w-[100%]">
                        <div className="flex items-center max-[391px]:w-[30%]  max-[391px]:flex-col items-start max-[390px]:w-[23%] max-[834px]:flex-col max-[834px]:mt-32 max-lg:w-[50%]">
                            <div className="flex items-center justify-center flex-col mr-16 max-[391px]:mr-6 max-[391px]:mr-0] max-[391px]:flex max-[391px]:justify-center max-[391px]:mb-5 max-lg:w-[70%] max-[834px]:mb-5">
                                <img src={faqLogo1} alt="img"/>
                                <h5 className="mt-3.5 max-[391px]:text-[10px] max-lg:text-[13px]">Tap your card</h5>
                            </div>
                            <div className="flex items-center justify-center flex-col mr-16 max-[391px]:mr-6 max-[391px]:mr-0] max-[391px]:flex max-[391px]:justify-center max-[391px]:mb-5 max-lg:w-[70%] max-[834px]:mb-5">
                                <img src={faqLogo2} alt="img"/>
                                <h5 className="mt-3.5 max-[391px]:text-[10px] max-lg:text-[13px]">Tap your card</h5>
                            </div>
                            <div className="flex items-center justify-center flex-col mr-16 max-[391px]:mr-6 max-[391px]:mr-0] max-[391px]:flex max-[391px]:justify-center max-[391px]:mb-5 max-lg:w-[70%] max-[834px]:mb-5">
                                <img src={faqLogo3} alt="img"/>
                                <h5 className="mt-3.5 max-[391px]:text-[10px] max-lg:text-[13px]">Tap your card</h5>
                            </div>
                        </div>
                        <div className="pb-40">
                            <h1 className="font-bold text-3xl text-[#B3B3B3] text-center w-[387px] py-10 max-[391px]:text-left max-[391px]:w-[80%]">FAQ</h1>
                            <div className="border-l-2 pl-2.5 ">
                                <Fragment>
                                    <div className="md:w-[387px] max-md:w-[60%] max-[391px]:w-[90%]  mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
                                            <div className="px-3 bg-[#1A1919] rounded rounded-tr-[30px]">
                                                <AccordionHeader onClick={() => handleOpen({value: 1})}
                                                                 className='bg-transparent text-left max-[391px]:text-[14px] max-lg:text-[15px]'>
                                                    • How to customize the card?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#161616] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    • How to share with my card?
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="md:w-[387px] max-md:w-[60%] max-[391px]:w-[90%]  mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 2} icon={<Icon id={2} open={open}/>}>
                                            <div className="px-3 bg-[#1A1919] flex">
                                                <AccordionHeader onClick={() => handleOpen({value: 2})}
                                                                 className='bg-transparent text-left max-[391px]:text-[14px] max-lg:text-[15px]'>
                                                    • How to use a cards and   <br/> what we can add?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#161616] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="md:w-[387px] max-md:w-[60%] max-[391px]:w-[90%]  mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 3} icon={<Icon id={3} open={open}/>}>
                                            <div className="px-3 bg-[#1A1919]">
                                                <AccordionHeader onClick={() => handleOpen({value: 3})}
                                                                 className='bg-transparent text-left max-[391px]:text-[14px] max-lg:text-[15px]'>
                                                    • How to share with my card?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#161616] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="md:w-[387px] max-md:w-[60%] max-[391px]:w-[90%]  mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 4} icon={<Icon id={4} open={open}/>}>
                                            <div className="px-3 bg-[#1A1919]">
                                                <AccordionHeader onClick={() => handleOpen({value: 4})}
                                                                 className='bg-transparent text-left max-[391px]:text-[14px] max-lg:text-[15px]'>
                                                    • Any additional chages?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#161616] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="md:w-[387px] max-md:w-[60%] max-[391px]:w-[90%]  mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 5} icon={<Icon id={5} open={open}/>}>
                                            <div className="px-3 bg-[#1A1919]">
                                                <AccordionHeader onClick={() => handleOpen({value: 5})}
                                                                 className='bg-transparent text-left max-[391px]:text-[14px] max-lg:text-[15px]'>
                                                    • Is there a product warranty?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#161616] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="md:w-[387px] max-md:w-[60%] max-[391px]:w-[90%]  mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 6} icon={<Icon id={6} open={open}/>}>
                                            <div className="px-3 bg-[#1A1919]">
                                                <AccordionHeader onClick={() => handleOpen({value: 6})}
                                                                 className='bg-transparent text-left max-[391px]:text-[14px] max-lg:text-[15px]'>
                                                    • Is there a product warranty?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#161616] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="md:w-[387px] max-md:w-[60%] max-[391px]:w-[90%]  mb-2.5  rounded  flex items-center justify-center flex-col">
                                        <Accordion open={open === 7} icon={<Icon id={7} open={open}/>}>
                                            <div className="px-3 bg-[#1A1919] rounded rounded-br-[30px]">
                                                <AccordionHeader onClick={() => handleOpen({value: 7})}
                                                                 className="bg-transparent text-left max-[391px]:text-[14px] max-lg:text-[15px]">
                                                    • What is privacy policy?
                                                </AccordionHeader>
                                            </div>
                                            <div className="bg-[#161616] rounded px-2.5 w-[80%]  m-auto">
                                                <AccordionBody>
                                                    We're not always in the position that we want to be at. We're
                                                    constantly growing. We're constantly making mistakes. We're
                                                    constantly
                                                    trying to express ourselves and actualize our dreams.
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    </div>
                                </Fragment>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="border-l-2 flex items-start pl-2.5 max-[834px]:w-[60%] max-[834px]:top-[700px]
                         max-[834px]:right-[267px] absolute right-0 top-[-110px] max-[391px]:w-[100%] max-[391px]:right-0 max-[391px]:top-[-70px]
                         max-lg:w-[41%] max-lg:left-0 ">
                            <h1>•</h1>
                            <h1 className="pl-2.5 w-[494px]">Choose your design & personalize with your
                                own company logo. The logo
                                will be
                                engraved into the  metal card.</h1>
                        </div>
                        <div className="">
                            {/*{scroll}*/}
                            <img src={iphone} alt="img"
                                 className="absolute right-[-152px] top-10
                                      max-[391px]:right-[-38px] max-[391px]:w-[80%] max-[391px]:top-[180px] max-[834px]:w-[50%] max-[834px]:right-0 max-[834px]:top-[500px]
                                      max-[834px]:right-[-80px] max-lg:w-[60%] max-lg:right-[-125px] max-lg:top-[390px] max-md:w-[60%] max-md:right-[-100px]"
                                 data-aos="fade-down"
                                 data-aos-easing="linear"
                                 data-aos-duration="1500"/>
                            <img src={hand2} alt="img" className="absolute right-[-150px]
                            bottom-0 w-[65%] max-md:w-[300px] max-md:right-[-100px] max-[391px]:right-[-40px] max-[391px]:w-[290px] max-[391px]:top-[330px]
                            max-[834px]:w-[350px] max-[834px]:right-[-80px] max-lg:right-[-125px]"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1500"/>
                        </div>
                    </div>

                </div>
                {/*{scroll}*/}
            </div>
        </section>
    );
};

export default Faq;