import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

import Cursor  from './cursor/Cursor'

import Home from './home/Home'
import Navigation from './navigation/Navigation'
import About from './about/About'
import Loading from './loading/Loading'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let loadStartTime = Date.now()

    window.onload = () => {
      let loadEndTime = Date.now()
      let loadTimeDifference = loadEndTime - loadStartTime

      if (loadTimeDifference < 1200) {
        setTimeout(() => {
          setIsLoading(false)
        }, 1200 - loadTimeDifference)
      } else {
        setIsLoading(false)
      }
    }
  }, [])

  return (
    <>
      <div className="cursor__dot">
        <Cursor
          innerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Loading isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App