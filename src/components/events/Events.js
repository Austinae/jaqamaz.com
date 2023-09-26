import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useTranslation, Trans } from 'react-i18next'
import { HiLocationMarker } from 'react-icons/hi'
import { GiTicket } from 'react-icons/gi'

import ErrorPage from '../ErrorPage'
import './events.css'
import PageTitle from '../basics/PageTitle'
import Loading from '../loading/Loading'

const currentDate = new Date()

const getImageSrc = (photoUrl) => `https://api.jaqamaz.com/manage/${photoUrl}`

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

const fetchEvents = async () => {
  return axios
    .get('https://api.jaqamaz.com/manage/events')
    .then((res) => { return res.data })
}

const Music = () => {
  const { t } = useTranslation()
  const { isLoading, isError, data, error } = useQuery(['events'], fetchEvents)
  const [pastEvents, setPastEvents] = useState({})
  const [futureEvents, setFutureEvents] = useState({})

  useEffect(() => {
    if (!isLoading) {
      const reducedData = groupEventsByYearAndMonth(data)
      setPastEvents(reducedData.pastEvents)
      setFutureEvents(reducedData.futureEvents)
    }
  }, [isLoading])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isError) return <ErrorPage error={error} />
  if (isLoading) return <Loading isLoading={true} />

  return (
    <>
      <PageTitle title="Events" />
      <div className="custom-bg" />
      <section className="classic-flex events" style={{ flexDirection: 'column'}}>
        <div className="events-container">
          <h2>{t('upcoming-events')}</h2>
          <DisplayEvents events={futureEvents} />
          <h2>{t('past-events')}</h2>
          <DisplayEvents events={pastEvents} />
        </div>
      </section>
    </>
  )
}

export default Music