import BaseFetch from '../BaseFetch'
import _config from './config'

export default class Report extends BaseFetch
{
  constructor() {
    super()
    this.config = _config
  }
}