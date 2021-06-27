import { GoogleGeolocationAdapter } from './google-geolocation-adapter'
import { throwError } from '@/domain/test'
import axios from 'axios'

jest.mock('axios', () => ({
  async get (): Promise<string> {
    return await Promise.resolve('hash')
  }
}))

const apiUrl = 'aaaaaaa'
const apiToken = 'aaaaaaa'
const makeSut = (): GoogleGeolocationAdapter => {
  return new GoogleGeolocationAdapter(apiUrl, apiToken)
}

describe('Google Geolocation Adapter', () => {
  describe('locate()', () => {
    test('Should call hash with correct value', async () => {
      const sut = makeSut()
      const hashSpy = jest.spyOn(axios, 'get')
      await sut.locate('any_value')
      expect(hashSpy).toHaveBeenCalledWith('any_value')
    })

    test('Should return a valid hash on hash on success', async () => {
      const sut = makeSut()
      const hash = await sut.locate('any_value')
      expect(hash).toBe('hash')
    })

    test('Should throws if hash throws', async () => {
      const sut = makeSut()
      jest.spyOn(axios, 'get').mockImplementationOnce(throwError)
      const promise = sut.locate('any_value')
      await expect(promise).rejects.toThrow()
    })
  })
})
