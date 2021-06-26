export const addressPath = {
  post: {
    tags: ['Address Calculator'],
    summary: 'API para calcular distancia entre endereços',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/AdressParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/AddressResponse'
            }
          }
        }
      },
      400: { $ref: '#/components/badRequest' },
      401: { $ref: '#/components/unauthorized' },
      404: { $ref: '#/components/notFound' },
      500: { $ref: '#/components/serverError' }
    }
  }
}
