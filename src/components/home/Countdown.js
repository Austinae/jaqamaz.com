import './countdown.css'

import { useState, useEffect } from 'react'

const decomposeTime = (msRemaining) => {
  const days = Math.floor(msRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor(msRemaining / (1000 * 60 * 60) % 24)
  const minutes = Math.floor(msRemaining / 1000 / 60 % 60)
  const seconds = Math.floor(msRemaining / 1000 % 60)

  return { days, hours, minutes, seconds }
}

// date => "1 Feb 2024 15:00 UTC+1"
const Countdown = ({ date }) => {
  const timeNow = new Date(date) - new Date()
  const [timeRemaining, setTimeRemaining] = useState({ diff: timeNow, parsedTime: decomposeTime(timeNow)})
  
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        const timeDiff = prevTimeRemaining.diff - 1000
        const newTimeRemaining = { diff: timeDiff, parsedTime: decomposeTime(timeDiff) }
      
        if (timeDiff <= 0) clearInterval(timeInterval)
        if (prevTimeRemaining.parsedTime.days !== newTimeRemaining.parsedTime.days) addFlip(document.querySelector(".days .flip-card"), newTimeRemaining.parsedTime.days)
        if (prevTimeRemaining.parsedTime.hours !== newTimeRemaining.parsedTime.hours) addFlip(document.querySelector(".hours .flip-card"), newTimeRemaining.parsedTime.hours)
        if (prevTimeRemaining.parsedTime.minutes !== newTimeRemaining.parsedTime.minutes) addFlip(document.querySelector(".minutes .flip-card"), newTimeRemaining.parsedTime.minutes)
        if (prevTimeRemaining.parsedTime.seconds !== newTimeRemaining.parsedTime.seconds) addFlip(document.querySelector(".seconds .flip-card"), newTimeRemaining.parsedTime.seconds)
      
        return newTimeRemaining
      })
    }, 1000)
    return () => clearInterval(timeInterval)
  }, [])

  if (timeNow <= 0) return null

  const addFlip = (card, time) => {
    const currTime = card.querySelector(".top-half").innerText
    if (time === currTime) return

    let t = time <= 9 ? `0${time}` : time
    const topHalf = card.querySelector(".top-half")
    const bottomHalf = card.querySelector(".bottom-half")
    const topFlip = document.createElement("div")
    const bottomFlip = document.createElement("div")

    topFlip.classList.add("top-flip")
    topFlip.innerText = currTime
    bottomFlip.classList.add("bottom-flip")
    topFlip.addEventListener("animationstart", () => { topHalf.innerText = t })
    topFlip.addEventListener("animationend", () => { topFlip.remove(); bottomFlip.innerText = t })
    bottomFlip.addEventListener("animationend", () => { bottomHalf.innerText = t; bottomFlip.remove() })

    card.appendChild(topFlip)
    card.appendChild(bottomFlip)
  }

  return (
    <main>
      <div className='cards'>
        <div className='card days'>
          <div className='flip-card'>
            <div className='top-half'>{timeRemaining.parsedTime.days}</div>
            <div className='bottom-half'>{timeRemaining.parsedTime.days}</div>
          </div>
          <p>Days</p>
        </div>

        <div className='card hours'>
          <div className='flip-card'>
            <div className='top-half'>{timeRemaining.parsedTime.hours}</div>
            <div className='bottom-half'>{timeRemaining.parsedTime.hours}</div>
          </div>
          <p>Hours</p>
        </div>

        <div className='card minutes'>
          <div className='flip-card'>
            <div className='top-half'>{timeRemaining.parsedTime.minutes}</div>
            <div className='bottom-half'>{timeRemaining.parsedTime.minutes}</div>
          </div>
          <p>Minutes</p>
        </div>

        <div className='card seconds'>
          <div className='flip-card'>
            <div className='top-half'>{timeRemaining.seconds}</div>
            <div className='bottom-half'>{timeRemaining.seconds}</div>
          </div>
          <p>Seconds</p>
        </div>
      </div>
    </main>
  )
}

export default Countdown
