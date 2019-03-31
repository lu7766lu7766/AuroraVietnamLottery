import BaseFetch from '../BaseFetch'
import _config from './config'

export default class User extends BaseFetch
{
  constructor() {
    super()
    this.config = _config
  }

  async login(data) {
    return await await this.request('login', data)
  }

  async register(data) {
    return await this.request('register', data)
  }

  async getUserInfo() {
    return await this.request('info')
  }

  async createUser(data) {
    return await this.request('createUser', data)
  }
}