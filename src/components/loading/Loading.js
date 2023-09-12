import './loading.css'

const Loading = ({ isLoading }) => {
  return (
    <div id={isLoading ? "preloader" : "preloader-none"} />
  )
}

export default Loading