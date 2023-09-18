import { Link } from 'react-router-dom'

import GroupPhoto from '../../assets/images/group_photo.jpg'
import './home.css'

const Home = () => {
  const onContactPress = (e) => {
    e.preventDefault()
    window.open("mailto:jaqamaz@gmail.com")
  }

  return (
    <>
      <section className="introduction">
        <div className="synopsis">
          <h2 className="title">Jaqâmaz</h2>
          <hr />
          <h3 className="jaqamaz-summary">
            Jaqâmaz is an acoustic live music band composed of 5 musicians mixing arabic music and Jazz
          </h3>
          <div className='home-cta-container'>
            <Link to={"/music"}>
              <div className="home-cta ac_btn">
                Our new album
                <div className="ring one" />
                <div className="ring two" />
                <div className="ring three" />
              </div>
            </Link>
            <div className="home-cta ac_btn" onClick={onContactPress} style={{ backgroundColor: 'black', color: 'white' }}>
              Contact us
              <div className="ring one" />
              <div className="ring two" />
              <div className="ring three" />
            </div>
          </div>
        </div>
        <div className="group-photo-container">
          <img className="group-photo" src={GroupPhoto} alt="Jaqâmaz group" />
        </div>
      </section>
    </>
  )
}

export default Home