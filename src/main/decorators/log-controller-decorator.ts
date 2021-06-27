import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class LogControllerDecorator implements Controller {
  constructor (
    private readonly controller: Controller
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    const controllerName = this.controller.constructor.name
    console.log(`${controllerName} - status code: ${httpResponse.statusCode}`)
    return httpResponse
  }
}
