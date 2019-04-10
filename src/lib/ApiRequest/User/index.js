import BaseRequest from '../BaseRequest'
import _config from './config'

export default class User extends BaseRequest
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

  async createUser(data, options) {
    return await this.request('createUser', data, options)
  }

  async updateUser(data, options) {
    return await this.request('updateUser', data, options)
  }

  async transferPoint(data, options) {
    return await this.request('transferPoint', data, options)
  }

  async addPoint(data, options) {
    return await this.request('addPoint', data, options)
  }
}