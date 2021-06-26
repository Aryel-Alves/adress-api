// import bcrypt from 'bcrypt'
import { Geolocator } from '@/data/protocols/geolocation/geolocator'

export class BcryptAdapter implements Geolocator {
  constructor (private readonly salt: number) {}

  async locate (value: string): Promise<string> {
    // const hash = await bcrypt.hash(value, this.salt)
    return await Promise.resolve('aaaa')
  }
}
