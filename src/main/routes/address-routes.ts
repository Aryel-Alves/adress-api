import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAdressCalculatorController } from '../factories/controllers/address/adress-calculator-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/address-calculator', adaptRoute(makeAdressCalculatorController()))
}
