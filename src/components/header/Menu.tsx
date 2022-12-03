import React, { FC, useState, useEffect } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'

//local
import BasketImageSvg from '../../assets/svg/BasketImageSvg'
import EmailSvg from '../../assets/svg/EmailSvg'

interface IProps {
  setBurgerMenu: any
  burgerMenu: boolean
}

const Menu: FC<IProps> = ({ setBurgerMenu, burgerMenu }) => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0)

  const whatsappLink = '+996500032640'
  const emailLink = 'kabylulanabdykalykuulu@gmail.com'

  //классы
  const classesNav =
    'nav_page text-[#000000] uppercase font-[Jura] font-[700] text-[20px]'
  const nav = 'my-6'

  //фунции
  const closeMenu = (e: any) => {
    e.stopPropagation()
    setBurgerMenu(false)
  }
  const openWhatsapp = (e: any) => {
    window.location.href = `https://wa.me/${whatsappLink}`
    closeMenu(e)
  }
  const openEmail = (e: any) => {
    window.location.href = `mailto:${emailLink}`
    closeMenu(e)
  }
  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if (currentScrollPos > 70) {
      setBurgerMenu(false)
      setPrevScrollPos(prevScrollPos)
    }
    setPrevScrollPos(currentScrollPos)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <div
      className={`absolute top-0 left-0 z-[1300] transition-[0.4s] ease-in-out ${
        burgerMenu
          ? 'translate-y-0 rounded-none'
          : 'translate-y-[-150%] rounded-[50%]'
      }`}
    >
      <div
        className={`w-[100vw] h-[100vh] bg-white flex-col menu px-5 pb-6 pt-16`}
      >
        <div
          className="shadow-[8px_10px_20px_rgba(0,0,0,0.15)] bg-[#2B2B2B] rounded-t-[10px] py-2 px-4 "
          onClick={closeMenu}
        >
          <Link to="/basket" className="flex items-center justify-center py-4">
            <BasketImageSvg />
            <p className="uppercase font-[Jura] font-[700] ml-6 text-[24px]">
              cart
            </p>
          </Link>
        </div>
        <div className="flex flex-col items-center my-6" onClick={closeMenu}>
          <NavLink to="/" className={`${nav}`}>
            <p className={`${classesNav}`}>home</p>
          </NavLink>
          <NavLink to="/products" className={`${nav}`}>
            <p className={`${classesNav}`}>products</p>
          </NavLink>
          <NavLink to="/about" className={`${nav}`}>
            <p className={`${classesNav}`}>about</p>
          </NavLink>
          <NavLink to="/contact" className={`${nav}`}>
            <p className={`${classesNav}`}>contact us</p>
          </NavLink>
        </div>
        <div className="bg-[#1E1E1E] font-[Jura] rounded-b-[10px] flex flex-col items-center py-2">
          <div
            className="flex items-center text-white cursor-pointer"
            onClick={openWhatsapp}
          >
            <BsWhatsapp className="text-[22px]" />
            <p className="text-[20px] ml-4">Whatsapp</p>
          </div>
          <div className="bg-[#363638] h-[1px] w-[280px] my-1 max-sm:w-[70%]"></div>
          <div className="flex items-center cursor-pointer" onClick={openEmail}>
            <div className="w-[20px]">
              <EmailSvg />
            </div>
            <p className="text-[20px] ml-4">Email</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
