import BaseFetch from '../BaseFetch'

export default class Bet extends BaseFetch
{
  async getGameTypeOptions() {
    return await this.request('gameTypeOptions')
  }

  async bet(data) {
    return await this.request('bet', data)
  }
}