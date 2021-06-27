export const AddressResponseSchema = {
  type: 'object',
  properties: {
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          adressesWithCoordinates: {
            type: 'array',
            items: {
              type: 'object',
              properties: { address: { type: 'string' }, lat: { type: 'number' }, lng: { type: 'number' } }
            }
          },
          distance: { type: 'number' }
        }
      }
    }
  }
}
