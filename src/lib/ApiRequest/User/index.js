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
    return await this.request('create', data, options)
  }

  async updateMyself(data, options) {
    return await this.request('updateMyself', data, options)
  }

  async transferPoint(data, options) {
    return await this.request('transferPoint', data, options)
  }

  async addPoint(data, options) {
    return await this.request('addPoint', data, options)
  }
}