import ReactGA from 'react-ga'

const useGAEventsTracker = (category = "Event Category") => {
    const trackEvent = (action = "action", label ="label") => {
        ReactGA.event({ category, action, label })
    }
    return trackEvent
}

export default useGAEventsTracker
