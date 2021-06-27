import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class LogControllerDecorator implements Controller {
  constructor (
    private readonly controller: Controller
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    const controllerName = this.controller.constructor.name
    const info = `${controllerName} - status code: ${httpResponse.statusCode}`
    console.log(httpResponse.statusCode === 500 ? `${info} - ${httpResponse.body.stack}` : info)
    return httpResponse
  }
}
