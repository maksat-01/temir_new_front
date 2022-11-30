import React, { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'

//local
import BasketImageSvg from '../../assets/svg/BasketImageSvg'
import EmailSvg from '../../assets/svg/EmailSvg'

interface IProps {
  setBurgerMenu: any
}

const Menu: FC<IProps> = ({ setBurgerMenu }) => {
  const whatsappLink = '+996500032640'
  const emailLink = 'kabylulanabdykalykuulu@gmail.com'
  const classesNav =
    'text-[#000000] uppercase font-[500] my-5 text-[20px] leading-[30px]'
  const closeMenu = (e: any) => {
    e.stopPropagation()
    setBurgerMenu(false)
  }
  const openMenu = (e: any) => {
    e.stopPropagation()
    setBurgerMenu(true)
  }
  const openWhatsapp = (e: any) => {
    window.location.href = `https://wa.me/${whatsappLink}`
    closeMenu(e)
  }
  const openEmail = (e: any) => {
    window.location.href = `mailto:${emailLink}`
    closeMenu(e)
  }
  return (
    <div
      className="absolute top-0 left-0 w-[100vw] h-[100vh] z-40"
      onClick={closeMenu}
    >
      <div
        className="transition bg-[#D9D9D9] w-full flex-col menu px-5 pb-6 pt-1 z-50"
        onClick={openMenu}
      >
        <div className="flex justify-end my-5">
          <AiOutlineClose
            className="text-black rotate-90 text-[30px] cursor-pointer"
            onClick={closeMenu}
          />
        </div>
        <div
          className="shadow-[8px_10px_20px_rgba(0,0,0,0.15)] bg-[#2B2B2B] rounded-t-[10px] py-2 px-4 "
          onClick={closeMenu}
        >
          <Link to="/basket" className="flex items-center justify-center">
            <BasketImageSvg />
            <p className="uppercase ml-6 text-[24px]">cart</p>
          </Link>
        </div>
        <div className="flex flex-col items-center" onClick={closeMenu}>
          <NavLink to="/" className={`${classesNav}`}>
            <p>home</p>
          </NavLink>
          <NavLink to="/products" className={`${classesNav}`}>
            <p>products</p>
          </NavLink>
          <NavLink to="/about" className={`${classesNav}`}>
            <p>about</p>
          </NavLink>
          <NavLink to="/contact" className={`${classesNav}`}>
            <p>contact us</p>
          </NavLink>
        </div>
        <div className="bg-[#1E1E1E] rounded-b-[10px] flex flex-col items-center py-2">
          <div
            className="flex items-center text-white cursor-pointer"
            onClick={openWhatsapp}
          >
            <BsWhatsapp className="text-[22px]" />
            <p className="text-[22px] ml-4">Whatsapp</p>
          </div>
          <div className="bg-[#363638] h-[1px] w-[280px] my-1 max-sm:w-[70%]"></div>
          <div className="flex items-center cursor-pointer" onClick={openEmail}>
            <div className="w-[20px]">
              <EmailSvg />
            </div>
            <p className="text-[22px] ml-4">Email</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
