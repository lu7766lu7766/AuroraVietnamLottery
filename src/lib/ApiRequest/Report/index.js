import BaseRequest from '../BaseRequest'
import _config from './config'

export default class Report extends BaseRequest
{
  constructor() {
    super()
    this.config = _config
  }

  async getBetDetail(data) {
    return await this.request('betDetail', data)
  }

  async getBetTotal(data) {
    return await this.request('betTotal', data)
  }

  async getTransferDetail(data) {
    return await this.request('transferDetail', data)
  }

  async getTransferTotal(data) {
    return await this.request('transferTotal', data)
  }

  async getStoreDetail(data) {
    return await this.request('storeDetail', data)
  }

  async getStoreTotal(data) {
    return await this.request('storeTotal', data)
  }
}