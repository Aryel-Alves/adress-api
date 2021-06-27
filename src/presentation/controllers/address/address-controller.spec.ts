import { AddressController } from './address-controller'
import { HttpRequest, Validation, FindGeolocation } from './address-controller-protocols'
import { badRequest, serverError } from '@/presentation/helpers/http/http-helper'
import { MissingParamError } from '@/presentation/errors'
import { mockValidation, mockFindGeolocation } from '@/presentation/test'
import { throwError } from '@/domain/test'

const mockRequest = (): HttpRequest => ({
  body: {
    addresses: [
      'Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003',
      'Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200',
      'Rua 19 de  Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280030'
    ]
  }
})

type SutTypes = {
  sut: AddressController
  validationStub: Validation
  findGeolocationStub: FindGeolocation
}

const makeSut = (): SutTypes => {
  const validationStub = mockValidation()
  const findGeolocationStub = mockFindGeolocation()
  const sut = new AddressController(validationStub, findGeolocationStub)

  return { sut, validationStub, findGeolocationStub }
}

describe('Address Controller', () => {
  test('Should return 500 if authentication throws', async () => {
    const { sut, findGeolocationStub } = makeSut()
    jest.spyOn(findGeolocationStub, 'toLocate').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toEqual(200)
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 400 if Validation returns a error', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  })
})
