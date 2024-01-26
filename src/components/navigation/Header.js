import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MdLanguage } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import FRFlag from '../../assets/images/FR.svg'
import GBFlag from '../../assets/images/GB.svg'
import './header.css'
import JaqamazLogo from '../../assets/images/jaqamaz_logo.svg'
import BirdSinging from '../../assets/audio/bulbul.mp3'

const options = [
  // { value: 'ar', label: "اَلْعَرَبِيَّةُ - ar"},
  // { value: 'de', label: "Deutsch - de"},
  { value: 'en',label: "English - en"},
  // { value: 'fr', label: "Français - fr"}
]

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState("en")

  const audioRef = useRef(new Audio(BirdSinging))

  const playAudio = () => {
    if (audioRef.current && userInteracted && navigator.userActivation.hasBeenActive) {
      audioRef.current.play()
    }
  }

  const stopAudio = () => {
    if (audioRef.current && userInteracted) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  // avoids play() failed because the user didn't interact with the document first
  useEffect(() => {
    const handleInteraction = () => { setUserInteracted(true) }
  
    document.addEventListener('click', handleInteraction)
    document.addEventListener('scroll', handleInteraction)
  
    return () => {
      document.removeEventListener('click', handleInteraction())
      document.removeEventListener('scroll', handleInteraction())
    }
  }, [])

  useEffect(() => {
    return () => {
      audioRef.current.pause()
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/">
          <div className="logo" onMouseEnter={playAudio} onMouseLeave={stopAudio}>
            <img src={JaqamazLogo} alt="Jaqâmaz" />
          </div>
        </NavLink>
        <div className="menu-icon" onClick={() => setShowNavbar(!showNavbar)}>
          {/* <RxHamburgerMenu size={40} color='white' />
            instead of going for an icon I decided to go for a custom animated one which follows below
          */}
          <label>
            <span className={`${showNavbar && 'active'}`}></span>
            <span className={`${showNavbar && 'active'}`}></span>
            <span className={`${showNavbar && 'active'}`}></span>
          </label>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li><NavLink onClick={() => setShowNavbar(!showNavbar)} to="/">{t('home.title')}</NavLink></li>
            <li><NavLink onClick={() => setShowNavbar(!showNavbar)} to="/about">Team</NavLink></li>
            <li><NavLink onClick={() => setShowNavbar(!showNavbar)} to="/events">{t('events.title')}</NavLink></li>
          </ul>
          <div className="language-selector" onClick={() => {i18n.changeLanguage("en"); setLanguage("en")}}>
            <img style={{width: '30px'}} src={GBFlag}/>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Header