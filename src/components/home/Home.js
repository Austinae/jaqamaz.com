import PageTitle from '../basics/PageTitle'
import { useTranslation, Trans } from 'react-i18next'

import './home.css'
import GroupPhoto from '../../assets/images/group_photo.jpg'
import Wave from '../../assets/images/wave.svg'
import Instagram from '../../assets/images/icons/instagram.svg'
import Facebook from '../../assets/images/icons/facebook.svg'
import Spotify from '../../assets/images/icons/spotify.svg'
import Youtube from '../../assets/images/icons/youtube.svg'
import AppleMusic from '../../assets/images/icons/applemusic.svg'
import SoundCloud from '../../assets/images/icons/soundcloud.svg'
import MusicImage from '../../assets/images/cover_art.png'
import JaqamazLogo from '../../assets/images/jaqamaz_logo.svg'

const Home = () => {
  const { t } = useTranslation()
  const onContactPress = (e) => {
    e.preventDefault()
    window.open("mailto:jaqamaz@gmail.com")
  }

  return (
    <>
      <PageTitle title={t('home.title')} />
      <div className="group-photo-container">
        <img className="wave" src={Wave} alt="Wave" />
        <img className="group-photo" src={GroupPhoto} alt="Jaqâmaz group" />
      </div>
      <div className="classic-flex home">
        <div className="classic-flex title">
          <h1 id="jaqamaz-title">Jaqâmaz</h1>
        </div>
        <div className="classic-flex synopsis-and-links">
          <div id="synopsis">{t('home.synopsis')}</div>
          <div className="classic-flex links">
            <h3>{t('home.listen')}</h3>
            <div className="classic-flex social-media-container">
              <a href=""><img src={Spotify} alt="spotify" /></a>
              <a href="https://www.youtube.com/@Jaqamaz"><img src={Youtube} /></a>
              <a href=""><img src={AppleMusic} alt="applemusic" /></a>
              <a href=""><img src={SoundCloud} alt="soundcloud" /></a>
            </div>
            <h3>{t('home.follow')}</h3>
            <div className="classic-flex social-media-container">
              <a href="https://www.instagram.com/jaqamaz/"><img src={Instagram} alt="instagram" /></a>
              <a href="https://www.facebook.com/profile.php?id=100092573536653"><img src={Facebook} alt="facebook" /></a>
            </div>
          </div>
        </div>
        <h2>{t('home.last-video')}</h2>
        <div id="yt-videos">
          <div className="yt-wrapper">
            <iframe src="https://www.youtube.com/embed/xuOg-fr9cVY?si=k2U2Ft3-5lTrUSNX" title="Jaqâmaz-Sahara" allowFullScreen></iframe>
          </div>
        </div>
        <h2>{t('albums')}</h2>
        <div id="yt-videos classic-flex">
          <p className="nothing-here" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <Trans i18nKey="events.danse-ultime" /> <span> ≈ 2024/02</span>
          </p>
        </div>
        <div className='classic-flex album'>
          <div className="classic-flex music-image-container">
            <img src={MusicImage} className="music-image" alt="music" />
          </div>
          <div>
            <h4 style={{ textDecoration: 'underline', marginBottom: '10px'}}>Tracklist</h4>
            <ol className='tracklist'>
              <li>1. Sahara</li>
              <li>2. Pyramide</li>
              <li>3. Anyway</li>
              <li>4. Julietta</li>
              <li>5. Tony on March</li>
              <li>6. Ya lille</li>
              <li>7. El Furat</li>
              <li>8. Intimate Danse</li>
              <li>9. Hanine</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home