import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ReactModal, { } from 'react-modal'
import Select from 'react-select'
import { MdLanguage } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import JaqamazLogo from '../../assets/images/jaqamaz_logo.svg'
import BirdSinging from '../../assets/audio/bulbul.mp3'

const options = [
  { value: 'ar', label: "اَلْعَرَبِيَّةُ - ar"},
  { value: 'de', label: "Deutsch - de"},
  { value: 'en',label: "English - en"},
  { value: 'fr', label: "Français - fr"}
]

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "rgba(153, 102, 103, .5)" :  "white",
      color: 'black',
    }
  },
}

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(options.filter((item)=>item.value==i18n.language))

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
    <>
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
              <li><NavLink onClick={() => setShowNavbar(!showNavbar)} to="/about">{t('about.title')}</NavLink></li>
              <li><NavLink onClick={() => setShowNavbar(!showNavbar)} to="/events">{t('events.title')}</NavLink></li>
            </ul>
            <div className="settings-trigger" onClick={() => setIsSettingsModalOpen(true)}>
              <MdLanguage size={30} color="white" />
            </div>
          </div>
        </div>
      </nav>
      <ReactModal
        shouldCloseOnOverlayClick
        autoFocus
        isOpen={isSettingsModalOpen}
        contentLabel="settings modal"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(255,255,255,.6)",
            zIndex: 100,
            inset: '0px',
          },
          content: {
            maxWidth: "300px",
            backgroundColor: "#996667",
            marginLeft: "auto",
            padding: "10px 0px 10px 0px",
          }
        }}
      >
        <div className="classic-flex" style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
          <div>
            <h1 style={{ color: 'white', marginBottom: "20px" }}>{t('language')}</h1>
            <Select
              options={options}
              onChange={(lang) => {i18n.changeLanguage(lang.value); setLanguage(lang)}}
              styles={colourStyles}
              isMulti={false}
              value={language}
            />
          </div>
          <div onClick={() => setIsSettingsModalOpen(false)} style={{ padding: '10px 20px 10px 20px', background: 'white', color: 'black', fontWeight: 'bold'}}>
            {t('exit')}
          </div>
        </div>
      </ReactModal>
    </>
  )
}

export default Header