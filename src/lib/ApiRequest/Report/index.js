import BaseRequest from '../BaseRequest'
import _config from './config'

export default class Report extends BaseRequest
{
  constructor() {
    super()
    this.config = _config
  }

  async getBetDetail() {
    return await this.request('betDetail')
  }

  async getBetTotal() {
    return await this.request('betTotal')
  }

  async getTransferDetail() {
    return await this.request('transferDetail')
  }

  async getTransferTotal() {
    return await this.request('transferTotal')
  }

  async getStoreDetail() {
    return await this.request('storeDetail')
  }

  async getStoreTotal() {
    return await this.request('storeTotal')
  }
}