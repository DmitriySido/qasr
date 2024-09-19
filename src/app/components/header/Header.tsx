'use client'

import './header.scss'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/icons/logo.svg'
import ClockIcon from '../../../../public/icons/clock-icon.png'
import { useState } from "react";
import ButtonBuy from '../UI/buttonBuy/ButtonBuy'
import Navigation from './navigation/Navigation'

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)

  const links = [
    {
      title: 'Plan Your Visit',
      link1: {
        path: '/pages/visitor',
        linkText: 'Visitor Information'
      },
      link2: {
        path: '/pages/gettingHere',
        linkText: 'Getting Here'
      },
      link3: {
        path: '/pages/faq',
        linkText: 'FAQs'
      }
    },
    {
      title: 'Explore The Palace',
      link1: {
        path: '/pages/zones',
        linkText: 'Zones'
      },
      link2: {
        path: '/pages/zones#dinning',
        linkText: 'Getting Here'
      },
      link3: {
        path: '/pages/zones#shopping',
        linkText: 'Shopping'
      },
      link4: {
        path: '/pages/zones#palaceInMotion',
        linkText: 'Palace in Motion'
      }
    },
    {
      title: 'Tickets',
      link1: {
        path: '/pages/tickets#general-admission',
        linkText: 'General Admission'
      },
      link2: {
        path: '/pages/tickets#palace-in-motion',
        linkText: 'Palace in Motion'
      },
      link3: {
        path: '/pages/tickets#tours',
        linkText: 'Tours'
      }
    },
  ]


  return(
    <header className='header'>
      <div className='header-inner container'>
      <button className='burger-button' onClick={() => setBurgerMenu(true)}>
        <span></span>
      </button>


      <Link href={'/'}>
        <Image
          className='logo-icon'
          width={110}
          height={110}
          src={Logo}
          alt='Logo name'
        />
      </Link>

      <Link href={'/pages/selectDataTicket'} className='buy-ticket-button-phone'>Buy now</Link>

      <div className={`header-content ${burgerMenu ? 'active' : ''}`}>
        <button className='close-burger-menu' onClick={() => setBurgerMenu(false)}></button>
        <div className='header-content-top'>
          <div className="navigation-container opening-hours">
            <span className="text opening-hours-text">
              <Image
                className='clock-icon'
                width={18}
                height={18}
                src={ClockIcon}
                alt='Clock icon'
              />
              Open Today 11AM - 6PM
              </span>
            <span className="tooltip opening-hours-tooltip">
              <p className='tooltip-subtitle'>Opening hours are subject to change. <br /> please keep an eye for updates.</p>
              <Link href={'/pages/visitor'} className='navigation-link opening-hours-link'>See all</Link>
            </span>

            <span className='arrow'></span>
          </div>

          <ButtonBuy text='Buy Now' path='/pages/selectDataTicket'/>
        </div>
          
        <div className='header-content-bottom'>
          <Navigation links={links} setBurgerMenu={setBurgerMenu}/>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header