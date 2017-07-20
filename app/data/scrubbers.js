class WeatherData{
  constructor(obj) {
    this.city = obj.current_observation.display_location.city,
    this.icon = obj.current_observation.icon,
    this.temp = obj.current_observation.temp_f,
    this.hourly = obj.hourly_forecast.slice(0,3)

  }
}

export default WeatherData
