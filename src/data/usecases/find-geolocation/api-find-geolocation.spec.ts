import { ApiFindGeolocation } from './api-find-geolocation'
import { Geolocator } from './api-find-geolocation-protocols'
import { mockGeolocator } from '@/data/test'
import { throwError, mockGeolocation } from '@/domain/test'

type SutTypes = {
  sut: ApiFindGeolocation
  geolocatorStub: Geolocator
}

const makeSut = (): SutTypes => {
  const geolocatorStub = mockGeolocator()
  const sut = new ApiFindGeolocation(geolocatorStub)
  return {
    sut,
    geolocatorStub
  }
}

describe('Api Find Geolocation UseCase', () => {
  test('Should call Geolocator with correct value', async () => {
    const { sut, geolocatorStub } = makeSut()
    const geolocatorSpy = jest.spyOn(geolocatorStub, 'locate')
    await sut.toLocate('any address')

    expect(geolocatorSpy).toHaveBeenCalledWith('any address')
  })

  test('Should throw if Hasher throws', async () => {
    const { sut, geolocatorStub } = makeSut()
    jest.spyOn(geolocatorStub, 'locate').mockImplementationOnce(throwError)

    const promise = await sut.toLocate('any address')

    await expect(promise).rejects.toThrow()
  })

  test('Should return an account on success', async () => {
    const { sut } = makeSut()
    const geolocation = await sut.toLocate('any address')
    expect(geolocation).toEqual(mockGeolocation())
  })
})
