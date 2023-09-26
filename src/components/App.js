import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Cursor  from './cursor/Cursor'
import Home from './home/Home'
import Navigation from './navigation/Navigation'
import About from './about/About'
import Loading from './loading/Loading'
import NoMatch from './nomatch/NoMatch'
import Events from './events/Events'

const queryClient = new QueryClient()

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [])

  
  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path="events" element={<Events />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App

  // I would have kept this but it's failing on mobile, loading infinetely
  // useEffect(() => {
  //   let loadStartTime = Date.now()

  //   window.onload = () => {
  //     let loadEndTime = Date.now()
  //     let loadTimeDifference = loadEndTime - loadStartTime

  //     if (loadTimeDifference < 1200) {
  //       setTimeout(() => {
  //         setIsLoading(false)
  //       }, 1200 - loadTimeDifference)
  //     } else {
  //       setIsLoading(false)
  //     }
  //   }
  // }, [])