import LostImage from '../../assets/images/lost.svg'
import './nomatch.css'

const NoMatch = () => {
  return (
    <section className="no-match">
      <div className="lost-image-container">
        <img src={LostImage} className="lost-image" />
        <h4>Error 404, you're lost</h4>
      </div>
    </section>
  )
}

export default NoMatch