import { Geolocation } from '@/domain/models/geolocation'

export interface FindGeolocation {
  toLocate: (address: string) => Promise<Geolocation>
}
