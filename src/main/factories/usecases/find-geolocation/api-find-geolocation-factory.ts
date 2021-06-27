import { GoogleGeolocationAdapter } from '@/infra/geolocation/google-geolocation-adapter'
import { ApiFindGeolocation } from '@/data/usecases/find-geolocation/api-find-geolocation'
import { FindGeolocation } from '@/domain/useCases/find-geolocation'
import env from '@/main/config/env'

export const makeApiFindGeolocation = (): FindGeolocation => {
  const googleGeolocationAdapter = new GoogleGeolocationAdapter(env.googleGeolocationApiURL, env.googleGeolocationApiToken)
  return new ApiFindGeolocation(googleGeolocationAdapter)
}
