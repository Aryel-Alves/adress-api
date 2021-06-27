export const AddressParamsSchema = {
  type: 'object',
  properties: {
    addresses: { type: 'array', items: { type: 'string' } }
  },
  required: ['addresses']
}
