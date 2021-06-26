import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { Controller } from '@/presentation/protocols'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  return new LogControllerDecorator(controller)
}
