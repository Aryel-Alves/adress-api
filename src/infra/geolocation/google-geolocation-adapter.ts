import axios from 'axios'
import { Geolocator } from '@/data/protocols/geolocation/geolocator'
import { Geolocation } from '@/domain/models/geolocation'

export class GoogleGeolocationAdapter implements Geolocator {
  constructor (private readonly apiUrl: string, private readonly apiToken: string) {}

  async locate (address: string): Promise<Geolocation> {
    const encodedAddress = encodeURI(address)
    const url = `${this.apiUrl}?address=${encodedAddress}&key=${this.apiToken}`
    const response = await axios.get(url)

    if (response.data.status !== 'OK') {
      if (response.data.error_message === 'The provided API key is invalid.') {
        console.log('******************************************')
        console.log('POR FAVOR ALTERAR TOKEN DA API DO GOOGLE NO ARQUIVO ENV')
        console.log('******************************************')
      }
      throw new Error(`Google API ERROR: ${response.data.error_message}`)
    }

    const results = response.data.results
    return results[0].geometry.location
  }
}
