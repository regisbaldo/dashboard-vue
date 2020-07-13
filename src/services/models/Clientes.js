import Model from './Model'

export default class Cliente extends Model {
  resource()
  {
    return 'api/v2/clientes'
  }
}