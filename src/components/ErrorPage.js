import { useTranslation } from 'react-i18next'

const ErrorPage = ({ error }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="custom-bg" />
      <div className='classic-flex' style={{ flexDirection: 'column', height: '100vh', width: '100vw' }}>
        <h1 style={{ color: 'white' }}>{t('error')}</h1>
        <div>{t('error-message')}</div>
        <div>
          {console.log(error)}
        </div>
      </div>
    </>
  )
}

export default ErrorPage