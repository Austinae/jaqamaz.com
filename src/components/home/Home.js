import GroupPhoto from '../../assets/images/group_photo.jpg'
import './home.css'

const Home = () => {
  return (
    <>
      <section className="section">
        <div className="synopsis">
          <h2 className="title">Jaqamaz</h2>
          <hr />
          <h3 className="description">
            Jaqâmaz is an acoustic live music band composed of 5 musicians mixing arabic music and Jazz
          </h3>
          <div className='home-cta-container'>
            <div className="home-cta ac_btn">
              Our new album
              <div className="ring one" />
              <div className="ring two" />
              <div className="ring three" />
            </div>
            <div className="home-cta ac_btn" style={{ backgroundColor: 'black', color: 'white' }}>
              Contact us
              <div className="ring one" />
              <div className="ring two" />
              <div className="ring three" />
            </div>
          </div>
        </div>
        <div className="group-photo-container">
          <img className="group-photo" src={GroupPhoto} />
        </div>
      </section>
    </>
  )
}

export default Home