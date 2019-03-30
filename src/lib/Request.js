export default class Request
{
  constructor() {
    this.user = new (require('./ApiFetch/User').default)
    // this.bet = new (require('./ApiFetch/Bet').default)
    // this.report = new (require('./ApiFetch/Report').default)
  }
}