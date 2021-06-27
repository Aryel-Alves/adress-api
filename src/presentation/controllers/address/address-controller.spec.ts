import { AddressController } from './address-controller'
import { HttpRequest, Validation } from './address-controller-protocols'
import { badRequest, ok } from '@/presentation/helpers/http/http-helper'
import { MissingParamError } from '@/presentation/errors'
import { mockValidation } from '@/presentation/test'
// import { throwError } from '@/domain/test'

const mockRequest = (): HttpRequest => ({
  body: {
    email: 'any_email@mail.com',
    password: 'any_password'
  }
})

type SutTypes = {
  sut: AddressController
  validationStub: Validation
}

const makeSut = (): SutTypes => {
  const validationStub = mockValidation()
  const sut = new AddressController(validationStub)

  return { sut, validationStub }
}

describe('Address Controller', () => {
  // test('Should return 500 if authentication throws', async () => {
  //   const { sut, authenticationStub } = makeSut()
  //   jest.spyOn(authenticationStub, 'auth').mockImplementationOnce(throwError)
  //   const httpResponse = await sut.handle(mockRequest())
  //   expect(httpResponse).toEqual(serverError(new Error()))
  // })

  test('Should return 200 if valid credentials are provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok({ accessToken: 'any_token' }))
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
