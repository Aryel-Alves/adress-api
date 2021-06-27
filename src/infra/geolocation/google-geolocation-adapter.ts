import axios from 'axios'
import { Geolocator } from '@/data/protocols/geolocation/geolocator'

export class GoogleGeolocationAdapter implements Geolocator {
  constructor (private readonly apiUrl: string, private readonly apiToken: string) {}

  async locate (address: string): Promise<string> {
    const url = `${this.apiUrl}?address=${address}&key=${this.apiToken}`
    const response = await axios.get(url)
    console.log('---------------AAAAAAAAAA----')
    console.log(response.data)
    return await Promise.resolve('aaaa')
  }
}
