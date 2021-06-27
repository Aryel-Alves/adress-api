import { makeAddressCalculatorValidation } from './adress-calculator-validation-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorator/log-controller-decorator-factory'
import { Controller } from '@/presentation/protocols'
import { AddressController } from '@/presentation/controllers/address/address-controller'
import { makeApiFindGeolocation } from '../../usecases/find-geolocation/api-find-geolocation-factory'

export const makeAdressCalculatorController = (): Controller => {
  const controller = new AddressController(makeAddressCalculatorValidation(), makeApiFindGeolocation())
  return makeLogControllerDecorator(controller)
}
