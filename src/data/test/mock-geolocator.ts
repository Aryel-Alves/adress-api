import { Geolocator } from '@/data/protocols/geolocation/geolocator'
import { Geolocation } from '@/domain/models/geolocation'
import { mockGeolocation } from '@/domain/test/mock-geolocation'

export const mockGeolocator = (): Geolocator => {
  class GeolocatorStub implements Geolocator {
    async locate (address: string): Promise<Geolocation> {
      return await Promise.resolve(mockGeolocation())
    }
  }
  return new GeolocatorStub()
}
