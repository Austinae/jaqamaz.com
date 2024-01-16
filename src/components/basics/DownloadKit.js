import Download from '../../assets/images/download.svg'

const DownloadKit = () => {
  return (
    <div className="install-kit">
      <div className="classic-flex">
        <a href="/press-kit.pdf">
          <img src={Download} alt="download" />
        </a>
        <p>Download complete press kit</p>
      </div>
    </div>
  )
}

export default DownloadKit