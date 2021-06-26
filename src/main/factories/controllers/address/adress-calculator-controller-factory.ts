import { makeAddressCalculatorValidation } from './adress-calculator-validation-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorator/log-controller-decorator-factory'
import { Controller } from '@/presentation/protocols'
import { AddressController } from '@/presentation/controllers/address/address-controller'

export const makeAdressCalculatorController = (): Controller => {
  const controller = new AddressController(makeAddressCalculatorValidation())
  return makeLogControllerDecorator(controller)
}
