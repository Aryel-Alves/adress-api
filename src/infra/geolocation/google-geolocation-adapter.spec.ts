import { GoogleGeolocationAdapter } from './google-geolocation-adapter'
import { mockGeolocation, throwError } from '@/domain/test'
import axios from 'axios'

jest.mock('axios', () => ({
  async get (): Promise<any> {
    return await Promise.resolve({
      data: {
        results: [
          {
            geometry: {
              location: mockGeolocation()
            }
          }
        ]
      }
    })
  }
}))

const apiUrl = 'aaaaaaa'
const apiToken = 'aaaaaaa'
const makeSut = (): GoogleGeolocationAdapter => {
  return new GoogleGeolocationAdapter(apiUrl, apiToken)
}

describe('Google Geolocation Adapter', () => {
  describe('locate()', () => {
    test('Should return a valid geolocation on locate on success', async () => {
      const sut = makeSut()
      const location = await sut.locate('any_value')
      expect(location).toStrictEqual(mockGeolocation())
    })

    test('Should throws if hash throws', async () => {
      const sut = makeSut()
      jest.spyOn(axios, 'get').mockImplementationOnce(throwError)
      const promise = sut.locate('any_value')
      await expect(promise).rejects.toThrow()
    })
  })
})
