import { useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next'

import PageTitle from '../basics/PageTitle'
import './news.css'
import MusicImage from '../../assets/images/music.gif'

const Music = () => {
  const { t } = useTranslation()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageTitle title="News" />
      <div className="custom-bg" />
      <section className="classic-flex news">
        <p className="nothing-here">
          <Trans i18nKey="news.danse-ultime" />
        </p>
        <div className="classic-flex music-image-container">
          <img src={MusicImage} className="music-image" alt="music" />
        </div>
        {/* <div className="about-scroll-container">
          <div className="arrow"></div>
        </div> */}
      </section>
    </>
  )
}

export default Music