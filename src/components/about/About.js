import { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './about.css'
import { useTranslation, Trans } from 'react-i18next'

import PageTitle from '../../components/basics/PageTitle'
import Wave2 from '../../assets/images/wave2.svg'
import Wave3 from '../../assets/images/wave3.svg'
import Hussein from '../../assets/images/hussein_rassim.jpg'
import Joachim from '../../assets/images/joachim_ségalard.jpg'
import Juliette from '../../assets/images/juliette_lacroix.jpg'
import Robin from '../../assets/images/robin_solé.jpg'
import Shaya from '../../assets/images/shaya_feldman.jpg'

const About = () => {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageTitle title={t('about.title')} />
      <div className="custom-bg" />
      <section className="classic-flex about">
        <div className="jaqamaz-description">
          <div>{t('about.jaqamaz-description-1')}</div>
          <div><Trans i18nKey="about.jaqamaz-description-2" /></div>
          <div><Trans i18nKey="about.jaqamaz-description-3" /></div>
          <div>{t('about.jaqamaz-description-4')}</div>
          <div><Trans i18nKey="about.jaqamaz-description-5" /></div>
        </div>
        <div className="about-scroll-container">
          <div className="arrow"></div>
        </div>
      </section>
      <img src={Wave2} className="wave-alt" alt="wave" />
      <section className="classic-flex the-team classic-bg">
        <div>
          <ScrollAnimation animateIn="animate__shakeY" animateOnce className="classic-flex">
            <h1 className="artists-header">{t('about.the-team')}</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__backInRight" animateOnce className="classic-flex">
            <div className="artist">
              <img src={Robin} className="artist-img" alt="Robin Solé" />
              <div className="artist-text">
                <h3 className="artist-name">Robin Solé</h3>
                <div className="artist-description">{t('about.robin-solé')}</div>
              </div>
            </div>
          </ScrollAnimation>
          <hr className="separator" />
          <ScrollAnimation animateIn="animate__backInLeft" animateOnce className="classic-flex">
            <div className="artist">
              <img src={Shaya} className="artist-img" alt="Shaya Feldman"/>
              <div className="artist-text">
                <h3 className="artist-name">Shaya Feldman</h3>
                <div className="artist-description">{t('about.shaya-feldman')}</div>
              </div>
            </div>
          </ScrollAnimation>
          <hr className="separator" />
          <ScrollAnimation animateIn="animate__backInRight" animateOnce className="classic-flex">
            <div className="artist">
              <img src={Joachim} className="artist-img" alt="Joachim ségalard"/>
              <div className="artist-text">
                <h3 className="artist-name">Joachim ségalard</h3>
                <div className="artist-description">{t('about.joachim')}</div>
              </div>
            </div>
          </ScrollAnimation>
          <hr className="separator" />
          <ScrollAnimation animateIn="animate__backInLeft" animateOnce className="classic-flex">
            <div className="artist">
              <img src={Juliette} className="artist-img" alt="Juliette Lacroix"/>
              <div className="artist-text">
                <h3 className="artist-name">Juliette Lacroix</h3>
                <div className="artist-description">{t('about.juliette')}</div>
              </div>
            </div>
          </ScrollAnimation>
          <hr className="separator" />
          <ScrollAnimation animateIn="animate__backInRight" animateOnce className="classic-flex">
            <div className="artist">
              <img src={Hussein} className="artist-img" alt="Hussein Rassim"/>
              <div className="artist-text">
                <h3 className="artist-name">Hussein Rassim</h3>
                <div className="artist-description">{t('about.hussein')}</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <img src={Wave3} className="wave-alt-2" alt="wave" />
      <div className="classic-flex bg-gradient">
        <div className="classic-flex cta-mission-container">
          <h2>{t('about.available-for')}</h2>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.live-performances')}</a></div>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.festivals')}</a></div>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.collaborations')}</a></div>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.interviews')}</a></div>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.workshops')}</a></div>
        </div>
      </div>
    </>
  )
}

export default About