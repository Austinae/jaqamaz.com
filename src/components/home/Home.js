import PageTitle from '../basics/PageTitle'
import { useTranslation } from 'react-i18next'

import GroupPhoto from '../../assets/images/group_photo.jpg'
import Wave from '../../assets/images/wave.svg'
import Instagram from '../../assets/images/icons/instagram.svg'
import Facebook from '../../assets/images/icons/facebook.svg'
import Spotify from '../../assets/images/icons/spotify.svg'
import Youtube from '../../assets/images/icons/youtube.svg'
import AppleMusic from '../../assets/images/icons/applemusic.svg'
import SoundCloud from '../../assets/images/icons/soundcloud.svg'
import './home.css'

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
              <a href=""><img src={Spotify} /></a>
              <a href="https://www.youtube.com/@Jaqamaz"><img src={Youtube} /></a>
              <a href=""><img src={AppleMusic} /></a>
              <a href=""><img src={SoundCloud} /></a>
            </div>
            <h3>{t('home.follow')}</h3>
            <div className="classic-flex social-media-container">
              <a href="https://www.instagram.com/jaqamaz/"><img src={Instagram} /></a>
              <a href="https://www.facebook.com/profile.php?id=100092573536653"><img src={Facebook} /></a>
            </div>
          </div>
        </div>
        <h2>{t('home.last-video')}</h2>
        <div id="yt-videos">
          <div className="yt-wrapper">
            <iframe src="https://www.youtube.com/embed/xuOg-fr9cVY?si=k2U2Ft3-5lTrUSNX" title="Jaqâmaz-Sahara" allowFullScreen></iframe>
          </div>
        </div>

        {/* <div className="classic-flex yt-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xuOg-fr9cVY?si=k2U2Ft3-5lTrUSNX" title="Jaqâmaz-Sahara" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        </div>
        <hr className="separator" />
        <section className="classic-flex" style={{ marginBottom: 30 }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2j6BeyaOcZo?si=eqEJDERDdDDiE8vd" title="Jaqâmaz-Ya-Lille" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
        </section>
        <div className="classic-flex social-media-container">
          <a href="">
            <div className="social-media-icon classic-flex">
              <img src={Instagram} />
            </div>
          </a>
        </div> */}
      </div>
    </>
  )
}

export default Home