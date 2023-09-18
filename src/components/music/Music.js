import { useEffect } from 'react'

import PageTitle from '../../components/basics/PageTitle'
import './music.css'
import MusicImage from '../../assets/images/music.gif'

const Music = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="custom-bg">
      <PageTitle title="Music" />
      <section className="classic-flex music custom-bg">
        <p className="nothing-here">
          <span style={{ fontWeight: 900, fontFamily: 'Montserrat' }}>"Danse intime"</span> album coming out soon
        </p>
        <div className="classic-flex music-image-container">
          <img src={MusicImage} className="music-image" alt="music" />
        </div>
        <div className="about-scroll-container">
          <div className="arrow"></div>
        </div>
      </section>
      <hr className="separator" />
      <section className="classic-flex custom-bg">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xuOg-fr9cVY?si=k2U2Ft3-5lTrUSNX"
          title="Jaqâmaz-Sahara"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </section>
      <hr className="separator" />
      <section className="classic-flex custom-bg" style={{ marginBottom: 30 }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2j6BeyaOcZo?si=eqEJDERDdDDiE8vd"
          title="Jaqâmaz-Ya-Lille"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </section>
    </div>
  )
}

export default Music