import { Geolocation } from '@/domain/models/geolocation'

export interface Geolocator {
  locate: (value: string) => Promise<Geolocation>
}
