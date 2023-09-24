import {
  AiFillGithub,
  AiOutlineMail,
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  let date = new Date()
  let year = date.getFullYear()

  return (
    <div className="classic-flex footer">
      <div className="developed-by">
        <h3>{t('footer.developed-by')}</h3>
      </div>
      <div className="developed-by">
        <h3>{t('footer.copyright', { year: year })}</h3>
      </div>
      <div className="developed-by">
      <ul>
        <li>
          <a
            href="https://github.com/Austinae"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/william-ga/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="mailto:guerrandw@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Footer
