import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols/validation'

export const makeAddressCalculatorValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['addresses']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
