import axios from 'axios'
import { Geolocator } from '@/data/protocols/geolocation/geolocator'
import { Geolocation } from '@/domain/models/geolocation'

export class GoogleGeolocationAdapter implements Geolocator {
  constructor (private readonly apiUrl: string, private readonly apiToken: string) {}

  async locate (address: string): Promise<Geolocation> {
    const encodedAddress = encodeURI(address)
    const url = `${this.apiUrl}?address=${encodedAddress}&key=${this.apiToken}`
    const response = await axios.get(url)
    const results = response.data.results
    return results[0].geometry.location
  }
}
