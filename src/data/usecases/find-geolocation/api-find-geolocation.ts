import { Geolocator, FindGeolocation } from './api-find-geolocation-protocols'

export class ApiFindGeolocation implements FindGeolocation {
  constructor (
    private readonly geolocator: Geolocator
  ) {}

  async toLocate (address: string): Promise<any> {
    return await this.geolocator.locate(address)
  }
}
