import { useState, useRef, useEffect } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './navigation.css'

import { RxHamburgerMenu } from 'react-icons/rx'
import JaqamazLogo from '../../assets/images/jaqamaz_logo.svg'
import BirdSinging from '../../assets/audio/robin_singing.mp3'

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const audioRef = useRef(new Audio(BirdSinging))

  const playAudio = () => {
    if (audioRef.current && userInteracted) audioRef.current.play()
  }

  const stopAudio = () => {
    if (audioRef.current && userInteracted) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  // avoids play() failed because the user didn't interact with the document first
  useEffect(() => {
    const handleInteraction = () => setUserInteracted(true)
  
    document.addEventListener('click', handleInteraction)
    document.addEventListener('scroll', handleInteraction)
  
    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
    }
  }, [])

  useEffect(() => {
    return () => {
      audioRef.current.pause()
    }
  }, [])

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <NavLink to="/">
            <div className="logo" onMouseEnter={playAudio} onMouseLeave={stopAudio}>
              <img src={JaqamazLogo} alt="Jaqamaz" />
            </div>
          </NavLink>
          <div className="menu-icon" onClick={() => setShowNavbar(!showNavbar)}>
            {/* <RxHamburgerMenu size={40} color='white' /> */}
            <label>
              <span className={`${showNavbar && 'active'}`}></span>
              <span className={`${showNavbar && 'active'}`}></span>
              <span className={`${showNavbar && 'active'}`}></span>
            </label>
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/dashboard">Events</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <span className="made-with-love">
        Made with ❤️ by <a href="//github.com/Austinae" target="_blank">Austinae 🇫🇷</a>
      </span>
    </div>
  )
}

export default Navigation