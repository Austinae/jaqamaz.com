import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiLocationMarker } from 'react-icons/hi'
import { GiTicket } from 'react-icons/gi'

import ErrorPage from '../ErrorPage'
import './events.css'
import './cta.css'
import PageTitle from '../basics/PageTitle'
import Loading from '../loading/Loading'

const currentDate = new Date()

const baseUrl = process.env.REACT_APP_ENVIRONMENT == "production" ? 'https://api.jaqamaz.com/manage' :  'http://localhost:3001'

const getImageSrc = (photoUrl) => `${baseUrl}/${photoUrl}`

const formatDate = (inputDate) => {
  const date = new Date(inputDate)
  return date.toLocaleString('en-US', { month: 'short', day: 'numeric' })
}

const groupEventsByYearAndMonth = (events) => {
  if (!events) return
  const reducedEvents = events.reduce((result, event) => {
    const eventDate = new Date(event.date)
    const eventYear = eventDate.getFullYear()
    const eventMonth = eventDate.toLocaleString('default', { month: 'long' })

    const isPastEvent = eventDate < currentDate

    const categoryKey = isPastEvent ? 'pastEvents' : 'futureEvents'

    if (!result[categoryKey][eventYear]) {
      result[categoryKey][eventYear] = {}
    }

    if (!result[categoryKey][eventYear][eventMonth]) {
      result[categoryKey][eventYear][eventMonth] = []
    }

    result[categoryKey][eventYear][eventMonth].push(event)

    return result
  }, { pastEvents: {}, futureEvents: {} })
  return reducedEvents
}

const DisplayEvents = ({events}) => {
  const { t } = useTranslation()
  
  return (
    <>
      {Object.keys(events).map((year) =>
        Object.keys(events[year]).map((month, idx) => (
          <div key={month}>
              <div className="event-month-year">{month} {year}</div>
              {events[year][month].map((event) => (
                <div key={`event-${event.id}`} className="event">
                  <div className="event-content">
                    <div className="upper-event-content">
                      {event.date && (
                        <div className="event-date">{formatDate(event.date)}</div>
                      )}
                      {event.location && (
                        <div className="event-location">
                          <HiLocationMarker size="20" />
                          {event.location}
                        </div>
                      )}
                    </div>
                    <div>
                      {event.url && (
                        <div className="event-url">
                          <GiTicket size="20" />
                          <a href={event.url}>{t('find-out-more')}</a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {(event.photo && event.photo !== '') && (
                      <img
                        alt="event-poster"
                        src={getImageSrc(event.photo)}
                        className="event-poster"
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
        ))
      )}
    </>
  )
}

const Events = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [events, setEvents] = useState(null)
  const [pastEvents, setPastEvents] = useState({})
  const [futureEvents, setFutureEvents] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${baseUrl}/events`)
        const result = await response.json()

        setEvents(result)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!loading) {
      const reducedData = groupEventsByYearAndMonth(events)
      setPastEvents(reducedData.pastEvents)
      setFutureEvents(reducedData.futureEvents)
    }
  }, [loading])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (error) return <ErrorPage error={error} />
  if (loading) return <Loading isLoading={true} />

  return (
    <>
      <PageTitle title="Events" />
      {/* <div className="custom-bg" /> */}
      <section className="classic-flex events" style={{ flexDirection: 'column'}}>
        <div className="events-container">
          <h2>{t('upcoming-events')}</h2>
          {Object.keys(futureEvents).length == 0 ? "No upcoming events" : <DisplayEvents events={futureEvents} />}
          <h2>{t('past-events')}</h2>
          <DisplayEvents events={pastEvents} />
        </div>
        <div className="classic-flex">
          <div className="classic-flex cta-mission-container">
            <h2 style={{marginBottom: "60px"}}>{t('about.available-for')}</h2>
            <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.live-performances')}</a></div>
            <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.festivals')}</a></div>
            <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.collaborations')}</a></div>
            <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.interviews')}</a></div>
            <div className="cta-mission-button"><a href="mailto:jaqamaz@gmail.com">{t('about.workshops')}</a></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Events