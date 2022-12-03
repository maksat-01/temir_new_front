import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

//local
import Logo from '../../assets/svg/logo'
import BasketImageSvg from '../../assets/svg/BasketImageSvg'
import BasketMediaSvg from '../../assets/svg/BasketMediaSvg'
import Menu from './Menu'

const Index = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const classesNav =
    'max-lg:hidden text-[20px] uppercase font-light tracking-wider leading-[30px]'
  const openMenu = () => {
    setBurgerMenu(true)
  }
  return (
    <header id="header" className="bg-black relative">
      <div className="lg:container mx-auto max-lg:w-[90%]">
        <div className="font-[Jura] p-3 w-full flex items-center justify-evenly relative max-lg:justify-start menu">
          <NavLink to={'/'} className={`${classesNav}`}>
            home
          </NavLink>
          <NavLink to={'/products'} className={`${classesNav}`}>
            products
          </NavLink>
          <Link to={'/'}>
            <Logo />
          </Link>
          <NavLink to={'/about'} className={`${classesNav}`}>
            about
          </NavLink>
          <NavLink to={'/contact'} className={`${classesNav}`}>
            contact us
          </NavLink>
        </div>
        <div className="absolute right-10 top-7 max-lg:right-6 max-md:right-3">
          <div>
            <Link to={'/basket'}>
              <div className="max-lg:hidden">
                <BasketImageSvg />
              </div>
            </Link>
            <div className="lg:hidden" onClick={openMenu}>
              <BasketMediaSvg />
            </div>
          </div>
        </div>
      </div>
      <hr />
      {burgerMenu && <Menu setBurgerMenu={setBurgerMenu} />}
    </header>
  )
}

export default Index
