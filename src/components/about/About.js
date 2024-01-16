import { useEffect } from 'react'
import './about.css'
import { useTranslation } from 'react-i18next'

import PageTitle from '../../components/basics/PageTitle'
import Hussein from '../../assets/images/hussein_rassim.jpg'
import Joachim from '../../assets/images/joachim_ségalard.jpg'
import Juliette from '../../assets/images/juliette_lacroix.jpg'
import Robin from '../../assets/images/robin_solé.jpg'
import Shaya from '../../assets/images/shaya_feldman.jpg'
import DownloadKit from '../basics/DownloadKit'

const About = () => {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <PageTitle title={t('about.title')} />
      <section className="classic-flex the-team">
        <div className="artist">
          <img src={Robin} className="artist-img" alt="Robin Solé" priority="high" />
          <div className="artist-text">
            <h3 className="artist-name">Robin Solé</h3>
            <div className="artist-description">{t('about.robin-solé')}</div>
          </div>
        </div>
        <div className="artist">
          <img src={Shaya} className="artist-img" alt="Shaya Feldman"/>
          <div className="artist-text">
            <h3 className="artist-name">Shaya Feldman</h3>
            <div className="artist-description">{t('about.shaya-feldman')}</div>
          </div>
        </div>
        <div className="artist">
          <img src={Joachim} className="artist-img" alt="Joachim ségalard"/>
          <div className="artist-text">
            <h3 className="artist-name">Joachim ségalard</h3>
            <div className="artist-description">{t('about.joachim')}</div>
          </div>
        </div>
        <div className="artist">
          <img src={Juliette} className="artist-img" alt="Juliette Lacroix"/>
          <div className="artist-text">
            <h3 className="artist-name">Juliette Lacroix</h3>
            <div className="artist-description">{t('about.juliette')}</div>
          </div>
        </div>
        <div className="artist">
          <img src={Hussein} className="artist-img" alt="Hussein Rassim"/>
          <div className="artist-text">
            <h3 className="artist-name">Hussein Rassim</h3>
            <div className="artist-description">{t('about.hussein')}</div>
          </div>
        </div>
        <DownloadKit />
      </section>
    </div>
  )
}

export default About