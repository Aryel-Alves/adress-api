import { Controller, HttpRequest, HttpResponse, Validation, FindGeolocation, Geolocation } from './address-controller-protocols'
import { badRequest, serverError, ok } from '@/presentation/helpers/http/http-helper'

export class AddressController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly findGeolocation: FindGeolocation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { addresses } = httpRequest.body
      const locations: Geolocation[] = await Promise.all(addresses.map(async (address) => {
        const location = await this.findGeolocation.toLocate(address)
        return { ...location, address }
      }))

      const distanceList = []
      for (let i = 0; i < locations.length; i++) {
        const locationsToCalculate: Geolocation[] = locations.filter((item, index) => index > i)

        for (const location of locationsToCalculate) {
          const distance = Math.sqrt(Math.pow((location.lng - locations[i].lng), 2) + Math.pow((location.lat - locations[i].lat), 2))
          distanceList.push({
            adressesWithCoordinates: [location, locations[i]],
            distance
          })
        }
      }

      return ok({ results: distanceList.sort((a, b) => a.distance - b.distance) })
    } catch (error) {
      return serverError(error)
    }
  }
}
