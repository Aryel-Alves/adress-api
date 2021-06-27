import { Geolocation } from '@/domain/models/geolocation'
import { FindGeolocation } from '@/domain/useCases/find-geolocation'

export const mockValidation = (): FindGeolocation => {
  class GeolocationFinderStub implements FindGeolocation {
    async toLocate (address: string): Promise<Geolocation> {
      return await Promise.resolve({ lat: 2, lng: 4 })
    }
  }

  return new GeolocationFinderStub()
}
