export interface ICurrent {
  current: {
    cloud: number
    condition: {
      code: number
      icon: string
      text: string
    }
    last_updated: string
    feelslike_c: number
    gust_kph: number
    humidity: number
    is_day: number
    temp_c: number
    vis_km: number
    wind_kph: number
  }

  location: {
    country: string
    lat: number
    localtime: string
    localtime_epoch: number
    lon: number
    name: string
    region: string
    tz_id: string
  }
}
