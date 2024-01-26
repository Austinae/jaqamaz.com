import Download from '../../assets/images/download.svg'

const DownloadKit = () => {
  return (
    <a href="/press-kit.pdf">
      <div className="install-kit">
        <div className="classic-flex">
            <img src={Download} alt="download" />
          <p>Download complete press kit</p>
        </div>
      </div>
    </a>
  )
}

export default DownloadKit