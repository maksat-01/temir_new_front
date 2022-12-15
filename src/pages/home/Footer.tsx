import React from "react";
import { Link } from "react-router-dom";
import motion from "../../assets/img/motion.svg";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  const menuLeft = [
    {
      title: "Home",
    },
    {
      title: "order",
    },
  ];
  const menuRight = [
    {
      title: "about",
    },
    {
      title: "Contacts",
    },
  ];
  const des = [
    {
      subtitle: "Mall Of Emirates. G-floor.",
    },
    {
      subtitle2: "Near: Rado, Pandora, Steve Madden",
    },
  ];

  return (
      <footer id="footer">
        <div className="container">
          <div className="footer flex items-center content-center flex-col py-24">
            <div className="flex items-center content-center">
              {menuLeft.map((el, index) => (
                  <Link
                      to={"/"}
                      key={index}
                      className="px-8 uppercase text-sm tracking-tight max-md:hidden"
                  >
                    {el.title}
                  </Link>
              ))}
              <h1 className="px-12 font-normal text-3xl">TEMIR LLC</h1>
              {menuRight.map((el, index) => (
                  <Link
                      to={"/"}
                      key={index}
                      className="px-8 uppercase text-sm tracking-tight max-md:hidden"
                  >
                    {el.title}
                  </Link>
              ))}
            </div>
            <div className="py-5">
              {des.map((el, index) => (
                  <div key={index}>
                    <p className="w-72 text-gray-500 text-center pb-0.5 text-xl uppercase tracking-tight">
                      {el.subtitle}
                    </p>
                    <p className="w-72 text-gray-500 leading-8 text-center  text-xl uppercase tracking-tight">
                      {el.subtitle2}
                    </p>
                  </div>
              ))}
            </div>
            <div className="flex items-center justify-center py-5">
              <Link to={"/"} className="text-3xl mx-2">
                <BsWhatsapp />
              </Link>
              <Link to={"/"} className="text-3xl mx-2">
                <FiFacebook />
              </Link>
              <Link to={"/"} className="text-3xl mx-2">
                <AiOutlineYoutube />
              </Link>
              <Link to={"/"} className="text-3xl mx-2">
                <AiOutlineInstagram />
              </Link>
              <Link to={"/"} className="text-3xl mx-2">
                <CgMail />
              </Link>
            </div>

            <div className="flex items-center">
              <h4 className="text-sm mr-2.5">Developed by</h4>
              <img src={motion} alt="img" className="ml-2.5" />
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;