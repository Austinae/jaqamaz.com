import PageTitle from '../basics/PageTitle'
import { useTranslation } from 'react-i18next'

import './home.css'
import Countdown from './Countdown'
import GroupPhoto from '../../assets/images/group_photo2hd.jpg'
import Wave from '../../assets/images/wavetest.svg'
import Instagram from '../../assets/images/icons/instagram.svg'
import Facebook from '../../assets/images/icons/facebook.svg'
import Youtube from '../../assets/images/icons/youtube.svg'
import MusicImage from '../../assets/images/cover_art.jpg'
import DownloadKit from '../basics/DownloadKit'

const album_release_date = "1 Feb 2024 15:00 UTC+1"

const Home = () => {
  const { t } = useTranslation()
  const onContactPress = (e) => {
    e.preventDefault()
    window.open("mailto:jaqamaz@gmail.com")
  }

  return (
    <div>
      <PageTitle title={t('home.title')} />
      <div className="group-photo-container">
        <img className="group-photo" src={GroupPhoto} alt="Jaqâmaz group" />
        <div className="links">
          <div className="social-media-container">
            <a href="https://www.youtube.com/@Jaqamaz"><img className="social-media-img" src={Youtube} /></a>
            <a href="https://www.instagram.com/jaqamaz/"><img className="social-media-img" src={Instagram} alt="instagram" /></a>
            <a href="https://www.facebook.com/profile.php?id=100092573536653"><img className="social-media-img" src={Facebook} alt="facebook" /></a>
            {/* <a href=""><img src={Spotify} alt="spotify" /></a> */}
            {/* <a href=""><img src={AppleMusic} alt="applemusic" /></a> */}
            {/* <a href=""><img src={SoundCloud} alt="soundcloud" /></a> */}
          </div>
        </div>
      </div>
      <div className="classic-flex home">
        <img className="wave" src={Wave} alt="Wave" />
        <div className="new-album">
          <p style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
            We are excited to announce that our new album is coming out in <b>February 1st 2024</b>
          </p>
          <Countdown date={album_release_date} />
          {/* <Countdown date="16 Jan 2024 18:13 UTC+1" /> */}
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
          <div>
            <a href="https://www.kickstarter.com/projects/923365875/jaqamaz-a-musical-crossroad-in-brussels">
              {new Date(album_release_date) - new Date() > 0 ? "Preorder now" : "Order now"}
            </a>
          </div>
        </div>
        <div className="classic-flex title">
          <h1 id="jaqamaz-title">Presentation of Jaqâmaz</h1>
        </div>
        <hr></hr>
        <div id="synopsis">
            What would it sound like if we mixed some inspiration from
            traditional music with the abstract textures of contemporary
            music? Or if we sprinkle the colorful harmony of jazz with the
            burning inflections of Arabic maqâms ?
        </div>
        <div id="synopsis">
            Jaqâmaz is a very recent group, made by 5 a crossroad, it’s a
            meeting point between four worlds. First of all we seek to
            combine all the richness that our different cultures can provide
            in order to create something new. Therefore each member has
            a great responsibility inside the group. Everyone has to share
            his influence to find the right balance with others. If we win this
            bet, this music might open doors. To those who seems familiar
            with the swing and the blues chords, the sound of the Ud could
            wake up their desire to see beyond the Mediterranean Sea? To
            those who sing with plaisir the orchestral Melodies, their body
            will irresistibly be attracted by the Modern grooves.
            In short, everything is gathered to touch various sensibilities
            and merge them into new horizons.
        </div>
        <div id="yt-videos">
          <div className="yt-wrapper">
            <iframe src="https://www.youtube.com/embed/KHvRF7xt9Vo?si=Y54QQRCSkv-jA69E" title="Jaqâmaz-Sahara" allowFullScreen></iframe>
          </div>
        </div>
        <DownloadKit />
      </div>
    </div>
  )
}

export default Home