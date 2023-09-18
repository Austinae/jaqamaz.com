import { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './about.css'

import PageTitle from '../../components/basics/PageTitle'
import Hussein from '../../assets/images/HusseinRassim.jpg'
import Joachim from '../../assets/images/JoachimSégalard.jpg'
import Juliette from '../../assets/images/JulietteLacroix.jpg'
import Robin from '../../assets/images/RobinSolé.jpg'
import Shaya from '../../assets/images/ShayaFeldman.jpg'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageTitle title="About" />
      <section className="classic-flex about custom-bg">
        <div className="jaqamaz-description">
          <div>
            What happens when you mix the rhythmic claves of South America with the lyrical melodies of classical music?
            Or when you infuse the vibrant harmonies of jazz with the passionate inflections of Arabic maqâms?
          </div>
          <div>
            <b>Jaqâmaz</b> is a meeting point where five worlds converge.
          </div>
          <div>
            This group is a testament to the power of <b>cultural diversity</b>, where each member brings their unique background and influences to create something entirely new.
            The group thrives on the rich tapestry woven by their distinct cultures, and each member plays a pivotal role in striking the perfect balance within the ensemble.
          </div>
          <div>
            This musical venture opens doors to a world of possibilities.
            For those familiar with the sway of swing and the allure of blues chords, the Ud's enchanting sound may beckon them beyond the Mediterranean Sea.
            And for those who find joy in orchestral melodies, they'll be irresistibly drawn to the Latin grooves that permeate Jaqâmaz's compositions.
          </div>
          <div>
            In essence, Jaqâmaz has harnessed the power to touch various sensibilities and merge them into new horizons, <b>transcending the boundaries of musical genres</b>.
          </div>
        </div>
        <div className="about-scroll-container">
          <div className="arrow"></div>
        </div>
      </section>
        <section className="classic-flex the-team custom-bg">
          <div>
            <ScrollAnimation animateIn="animate__shakeY" animateOnce className="classic-flex">
              <h1 className="artists-header">The team</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__backInRight" animateOnce className="classic-flex">
              <div className="artist">
                <img src={Robin} className="artist-img" alt="Robin Solé" />
                <div className="artist-text">
                  <h3 className="artist-name">Robin Solé</h3>
                  <div className="artist-description">
                    Robin Solé discovered music with percussions. At 7 years old, he starts playing drums with Manu Dyens. During college, he decides to learn classical percussions with Alain Beghin. Besides this teacher, he learns with Lionel Postolec at the conservatory of Versailles during High school. At this moments, he mets jazz musicians and plays concerts as a drummer.He continues classical percussion at the conservatory of Douai with Thierry Deleruyelle until he get his degree. There, he starts classical composition and joins jazz class with Thomas Grimmonprez and Phil Abraham, who are teachers in Bruxelles.With their encouragement, he enters in the conservatory of Bruxelles for the jazz class.Now, he is in third year of bachelor and plays with musicians in the city.
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <hr className="separator custom-bg" />
            <ScrollAnimation animateIn="animate__backInLeft" animateOnce className="classic-flex">
              <div className="artist">
                <img src={Shaya} className="artist-img" alt="Shaya Feldman"/>
                <div className="artist-text">
                  <h3 className="artist-name">Shaya Feldman</h3>
                  <div className="artist-description">
                    Shaya Feldman is a French-Israeli contrabass player, researcher, composer and multi-disciplinary Dada artist. Shaya teached at the Royal Conservatory of Brussels and the International School of Brussels. He is a graduate of the Jerusalem Academy of Music and the Conservatoire Nationale de Paris, and served as the head of the string instruments department at the Lod Conservatory in Israel. As a bass player Shaya performed with many orchestras such as the National Opera of Paris, the Jerusalem Symphony Orchestra, and the Sinfonietta Be'er Sheva. Shaya has performed his original works in Europe, the USA and Israel and cooperates frequently with composers of contemporary music. In recent years, Shaya performs original music in two ensembles: MASH and ZVOV, with whom he has also recorded three albums. He has also focused on music education and spectacles for young audiences. In 2018, his original one man show "Basse-Passe-Casse" was selected for Jeunesse Musicales and has been performed all over Belgium.
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <hr className="separator custom-bg" />
            <ScrollAnimation animateIn="animate__backInRight" animateOnce className="classic-flex">
              <div className="artist">
                <img src={Joachim} className="artist-img" alt="Joachim ségalard"/>
                <div className="artist-text">
                  <h3 className="artist-name">Joachim ségalard</h3>
                  <div className="artist-description">
                    After discovering piano as a child, Joachim Ségalard starts his studies of jazz piano at Conservatory of Versailles (CRR) in the classe of Damien Argentierie. Life at Conservatory and among others students of his class brings him to a more « classical » music. At the end of his high school he stays at the CRR and he join the class of Paul Lay at CMA13 of Paris and he discover the world of sound synthesis by taking courses with Benjamin Moussay. In 2020 he get his DEM (diploma in music studies) at CRR and enter at the Royal Conservatory of Brussel with Eric Legnini and Vincent Bruyninckx as teachers. He is actually in 3rd year of Bachelor and has started to play in different bands as a pianist, keyboard player and composer, in Brussel and in Paris.
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <hr className="separator custom-bg" />
            <ScrollAnimation animateIn="animate__backInLeft" animateOnce className="classic-flex">
              <div className="artist">
                <img src={Juliette} className="artist-img" alt="Juliette Lacroix"/>
                <div className="artist-text">
                  <h3 className="artist-name">Juliette Lacroix</h3>
                  <div className="artist-description">
                    Juliette Lacroix is a cellist, musician and educator and has always been involved in a variety of projects. Juliette studied at the Conservatory of Poitiers, Reims and Bordeaux and got her degree in 2009. Following her classical education, she has worked on different projects combining theatre, poetry, dance and drawing. She brings her experience of mediaeval, Balkan and Latino music into her classical projects (Duo Conversation, Symophonic Orchestra of Gironde), contemporary projects (Ensemble Un), jazz (L’nude, Reg), electronic music (Bunk) and folk music (Moonshine Fish). She adds a classical touch and an acoustic structure to Nawaris
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <hr className="separator custom-bg" />
            <ScrollAnimation animateIn="animate__backInRight" animateOnce className="classic-flex">
              <div className="artist">
                <img src={Hussein} className="artist-img" alt="Hussein Rassim"/>
                <div className="artist-text">
                  <h3 className="artist-name">Hussein Rassim</h3>
                  <div className="artist-description">
                    Hussein Rassim is an Iraqi musician, he plays the oud (oriental luth). After he studied in the best music schools of Baghdad he created his first own group, playing traditional Iraqi music. In 2015 he decided to move in Belgium. Today he lives in Brussel where he plays in different bands and great venues (OPRL, Muziepublique, Esperenzah Festival etc). With the cellist Juliette Lacroix he created the group Nawaris which made two albums: "Migration" (2018) and "Bach à Bagdad" (2019). He is the principal protagonist of the documentary film « The Way Back », a road movie autobiography.
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      <hr style={{ margin: 0, borderColor: 'black'}}></hr>
      <section className="classic-flex custom-bg">
        <div className="classic-flex cta-mission-container">
          <h2>Available for</h2>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">Live Performances</a></div>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">Festivals</a></div>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">Collaborations</a></div>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">Interviews</a></div>
          <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">Workshops</a></div>
        </div>
      </section>
    </>
  )
}

export default About