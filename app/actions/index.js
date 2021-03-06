import { WeatherData, NewsData, DarkSkyData, GifyData, AuthData } from '../data/scrubbers'
import { wundergroundKey, newsApiKey, darkSkyKey, gifyKey } from '../data/apiKeys'
import moment from 'moment'

export const fetchWeatherData = () => {
  return (dispatch) => {
    fetch(`http://api.wunderground.com/api/${wundergroundKey}/forecast/conditions/hourly/q/CO/Denver.json`).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res
    }).then(res => res.json()).then(data => {
      dispatch(setWeatherData(new WeatherData(data)))
    })
  }
}

export const fetchDarkSkyData = () => {
  return (dispatch) => {
    fetch(`https://api.darksky.net/forecast/${darkSkyKey}/39.750784,-104.996579`, {
      method: 'GET',
      headers: {"Accept-Encoding": "gzip"}
    }).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res
    }).then(res => res.json()).then(data => {
      dispatch(setWeatherData(new DarkSkyData(data)))
    })
  }
}

export const fetchNewsData = () => {
  return (dispatch) => {
    fetch(`https://newsapi.org/v1/articles?source=recode&apiKey=${newsApiKey}`).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res
    }).then(res => res.json()).then(data => {
      return dispatch(setNewsData(new NewsData(data)))
    })
  }
}

export const fetchGifyData = () => {
  return (dispatch) => {
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=${gifyKey}`).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res
    }).then(res => res.json()).then(data => {
      dispatch(setGifyData(new GifyData(data)))
    })
  }
}

export const fetchAuthData = () => {
  return (dispatch) => {
    const token = window.localStorage.githubAccessToken
    fetch(`https://api.github.com/user?access_token=${token}`).then(res => res.json()).then(data => fetch(data.received_events_url)).then(events => events.json()).then(results => {
      const request = results.filter(result => result.type === 'PullRequestEvent').map(event => new AuthData(event))
      dispatch(setAuthData(request));
    })
  }
}

export const setAuthData = (dataObj) => {
  return {type: 'AUTH_DATA', authData: dataObj}
}

export const setGifyData = (dataObj) => {
  return {type: 'GIFY_DATA', gifyData: dataObj}
}

export const fetchDateTodayData = () => {
  return (dispatch) => {
    const time = moment().format('h:mm');
    const amPm = moment().format('a');
    const day = moment().format('dddd, MMMM Do');
    dispatch(setDateTodayData([time, amPm, day]))
  }
}

export const setDateTodayData = (dataObj) => {
  return {type: 'DATE_TODAY_DATA', dateTodayData: dataObj}
}

export const setNewsData = (dataObj) => {
  return {type: 'NEWS_DATA', newsData: dataObj}
}

export const setWeatherData = (dataObj) => {
  return {type: 'WEATHER_DATA', weatherData: dataObj}
}

export const setTimeData = (dataObj) => {
  return {type: 'TIME_DATA', timeData: dataObj}
}
