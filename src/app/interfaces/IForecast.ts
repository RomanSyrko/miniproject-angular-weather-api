export interface IForecast {
  forecast: {
    forecastday: {
      astro: {
        is_moon_up: number
        is_sun_up: number
        moon_illumination: string
        moon_phase: string
        moonrise: string
        moonset: string
        sunrise: string
        sunset: string
      }
      date: string
      date_epoch: number
      day: {
        condition: {
          code: number
          icon: string
          text: string
        }
      }
      hour: {
        condition: {
          icon: string
          text: string
        }
        temp_c: number
        time: string
      }
      maxtemp_c: number
      mintemp_c: number
    }
  }
}
