import './news.css'
import MusicImage from '../../assets/images/music.svg'

const News = () => {
  return (
    <section className="news">
      <h4 className="nothing-here">
        "Danse intime" album coming out soon
      </h4>
      <div className="music-image-container">
        <img src={MusicImage} className="music-image" />
      </div>
    </section>
  )
}

export default News