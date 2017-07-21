export class WeatherData{
  constructor(obj) {
    this.city = obj.current_observation.display_location.city,
    this.icon = `../../assets/icons/${weatherIconKeys[obj.current_observation.icon]}.svg`,
    this.temp = obj.hourly_forecast[0].temp.english,
    this.hourly = obj.hourly_forecast.slice(0,3).map(hour => {
      return [`../../assets/icons/${weatherIconKeys[hour.icon]}.svg`, hour.FCTTIME.civil]
    })
  }
}

export class NewsData{
  constructor(obj) {
    this.articles = obj.articles.slice(0,5)
  }
}

export const weatherIconKeys = {
  chanceofflurries: 'flurries-snow3',
  chancerain: 'chancerain3',
  chanceofsleet: 'chancesleet3',
  chanceofsnow: 'flurries-snow3',
  chancetstorms: 'tstorm3',
  tstorms: 'tstorm3',
  clear: 'sunny_icon',
  cloudy: 'cloudy3',
  flurries: 'flurries-snow3',
  hazy: 'fog-hazy',
  fog: 'fog-hazy',
  mostlycloudy: 'mostlycloudy3',
  mostlysunny: 'sunny_icon',
  partlycloudy: 'mostlysunny-partlycloudy',
  partlysunny: 'mostlysunny-partlycloudy',
  rain: 'rain_icon',
  sleet: 'sleet3',
  snow: 'flurries-snow3',
  sunny: 'sunny_icon',
  thunderstorm: 'tstorm3',
};