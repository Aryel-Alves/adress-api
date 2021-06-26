import {
  errorSchema,
  AddressParamsSchema,
  AddressResponseSchema
} from './schemas/'

export default {
  AdressParams: AddressParamsSchema,
  AddressResponse: AddressResponseSchema,
  error: errorSchema
}
