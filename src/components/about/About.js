import './about.css'
import Kenya from '../../assets/images/kenya.jpeg'

const About = () => {
  return (
    <>
      <img src={Kenya} className="background-kenya" />
      <section className="about-section">
        <div className="description">
          <div>
            What happens when you mix the rhythmic claves of South America with the lyrical melodies of classical music?
            Or when you infuse the vibrant harmonies of jazz with the passionate inflections of Arabic maqâms?
          </div>
          <div>
            Jaqâmaz is a meeting point where five worlds converge.
          </div>
          <div>
            This group is a testament to the power of cultural diversity, where each member brings their unique background and influences to create something entirely new.
            The group thrives on the rich tapestry woven by their distinct cultures, and each member plays a pivotal role in striking the perfect balance within the ensemble.
          </div>
          <div>
            This musical venture opens doors to a world of possibilities.
            For those familiar with the sway of swing and the allure of blues chords, the Ud's enchanting sound may beckon them beyond the Mediterranean Sea.
            And for those who find joy in orchestral melodies, they'll be irresistibly drawn to the Latin grooves that permeate Jaqâmaz's compositions.
          </div>
          <div>
            In essence, Jaqâmaz has harnessed the power to touch various sensibilities and merge them into new horizons, transcending the boundaries of musical genres.
          </div>
        </div>
      </section>
    </>
  )
}

export default About