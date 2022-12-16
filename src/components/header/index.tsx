import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

//local
import Logo from '../../assets/svg/logo'
import BasketImageSvg from '../../assets/svg/BasketImageSvg'
import Menu from './Menu'
import {useAppSelector} from "../../hooks";

const Header = () => {
  //хук состоянии
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(true)
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0)
  //классы тегов
  const classesNav =
    'nav_page nav_menu uppercase font-[Jura] font-[400] text-[16px] font-light tracking-wider leading-[30px]'
  const classesLine =
    'absolute bg-white rounded-[3px] transition ease-in-out h-[3px] z-[1500]'
  //функции
  const openMenu = () => {
    setBurgerMenu(!burgerMenu)
  }
  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    setPrevScrollPos(currentScrollPos)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  const {basket} = useAppSelector(s => s.ReducerBasket)

  return (
    <header
      id="header"
      className="relative shadow-[0px_4px_13px_rgba(0,0,0,0.2)]"
    >
      <div
        className={`bg-black border-b-[1px] border-solid border-[rgba(255,255,255,0.06)] w-full z-[1000] fixed top-0 transition-[0.4s] ease-linear ${
          visible ? 'translate-y-0' : 'translate-y-[-100px]'
        }`}
      >
        <div className="lg:container mx-auto max-lg:md:w-[95%] max-md:w-[100%]">
          <div className="font-[Jura] p-3 w-full flex items-center relative menu">
            <NavLink to={'/'}>
              <p className={`${classesNav}`}>home</p>
            </NavLink>
            <NavLink to={'/products'}>
              <p className={`${classesNav}`}>products</p>
            </NavLink>
            <Link to={'/'}>
              <Logo />
            </Link>
            <NavLink to={'/about'}>
              <p className={`${classesNav}`}>about</p>
            </NavLink>
            <NavLink to={'/contact'}>
              <p className={`${classesNav}`}>contact us</p>
            </NavLink>
          </div>
          <div className="absolute right-6 top-7">
            <div>
              <Link to={'/basket'}>
                <div className="basket relative pr-5">
                  <BasketImageSvg />
                  <p className='absolute text-[#8E7A3B] top-1 left-8 text-[20px]'>{basket.length > 0 ? basket.length :""}</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="burger-menu absolute top-0 right-0 z-[1350]">
            <button
              className={
                'm-5 flex relative p-[18px] items-center justify-center cursor-pointer border-none outline-none rounded-[1px]'
              }
              onClick={openMenu}
            >
              <span
                className={`${classesLine} menu_transition right-0 ${
                  burgerMenu
                    ? 'rotate-[-40deg] w-full bg-black translate-y-0'
                    : 'w-[18px] translate-y-[-11px]'
                }`}
              ></span>
              <span
                className={`${classesLine} menu_transition w-full ${
                  burgerMenu ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`${classesLine} menu_transition left-0 right-0 ${
                  burgerMenu
                    ? 'rotate-[40deg] w-full bg-black translate-y-0'
                    : 'w-[18px] translate-y-[11px]'
                }`}
              ></span>
            </button>
          </div>
        </div>
        <Menu setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
      </div>
    </header>
  )
}

export default Header
