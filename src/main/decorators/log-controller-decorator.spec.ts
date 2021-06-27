import { LogControllerDecorator } from './log-controller-decorator'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { ok } from '@/presentation/helpers/http/http-helper'

const makeControllerStub = (): Controller => {
  class ControllerStub implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
      return await Promise.resolve(ok({ results: [] }))
    }
  }
  return new ControllerStub()
}

const mockRequest = (): HttpRequest => ({
  body: {
    name: 'any_name'
  }
})

type SutTypes = {
  sut: LogControllerDecorator
  controllerStub: Controller
}

const makeSut = (): SutTypes => {
  const controllerStub = makeControllerStub()
  const sut = new LogControllerDecorator(controllerStub)

  return {
    sut,
    controllerStub
  }
}

describe('Log Controller Decorator', () => {
  test('Should call controller handle method', async () => {
    const { controllerStub, sut } = makeSut()
    const handleSpy = jest.spyOn(controllerStub, 'handle')

    await sut.handle(mockRequest())
    expect(handleSpy).toHaveBeenCalledWith(mockRequest())
  })

  test('Should return the same result as the controller', async () => {
    const { sut } = makeSut()

    const httResponse = await sut.handle(mockRequest())
    expect(httResponse).toEqual(ok({ results: [] }))
  })
})
