import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Api de Calculo de endereço',
    description: 'Calcula distancia euclidiana usando api google',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  // servers: [{ url: '/api' }],
  tags: [
    { name: 'Address Calculator' }
  ],
  paths,
  schemas,
  components
}
