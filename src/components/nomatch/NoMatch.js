import { useTranslation } from 'react-i18next'

import LostImage from '../../assets/images/lost.svg'
import './nomatch.css'

const NoMatch = () => {
  const { t } = useTranslation()

  return (
    <section className="classic-flex no-match">
      <div className="lost-image-container">
        <img src={LostImage} className="lost-image" alt="signals that you are lost" />
        <h4>{t('nomatch.error')}</h4>
      </div>
    </section>
  )
}

export default NoMatch