import { Controller, HttpRequest, HttpResponse, Validation } from './address-controller-protocols'
import { badRequest, serverError, ok } from '@/presentation/helpers/http/http-helper'
import { FindGeolocation } from '@/domain/useCases/find-geolocation'

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
      const mockAddress = [
        'Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003',
        'Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200',
        'Rua 19 de  Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280030'
      ]
      const respot = await this.findGeolocation.toLocate(mockAddress[0])

      return ok({ mockAddress })
    } catch (error) {
      return serverError(error)
    }
  }
}
