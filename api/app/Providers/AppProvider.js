const {ServiceProvider, ioc} = require('@adonisjs/fold')

class AppProvider extends ServiceProvider
{
  register() {
  }

  /**
   * my global function
   */
  async boot() {
    const app = this.app
    const Logger = app.use('Logger')

    global._ = require('lodash')
    global.moment = require('moment')
    global.DB = use('Database')
    global.Create = class Create
    {
      static service(name) { return new (app.use(`App/Service/${name}`)) }

      static model(name) { return new (app.use(`App/Models/${name}`)) }

      static repository(name) { return new (app.use(`App/Repositories/${name}`)) }
    }
    global.Factory = (name) => { return app.use(`App/Factories/${name}`) }
    global.Constant = (name) => { return app.use(`App/Constants/${name}`) }
    global.Model = (name) => { return app.use(`App/Models/${name}`) }
    global.Validator = (name) => { return app.use(`App/Validators/${name}`) }
    global.Codes = (name) => { return app.use(`App/Constants/ApiCodes/${name}`) }
    global.ApiErrorException = app.use('App/Exceptions/ApiErrorException')
    // global.service = name => new (this.app.use(`App/Service/${name}Service`))
    // global.model = name => new (this.app.use(`App/Models/${name}`))
    global.GetIncrement = async table => (await DB.table('INFORMATION_SCHEMA.TABLES').select('AUTO_INCREMENT')
      .where('TABLE_SCHEMA', 'vietnam')
      .where('TABLE_NAME', table)
      .first()).AUTO_INCREMENT

    console.dir(Logger)
    global.Log = class Log
    {
      static get format() { return 'YYYY-MM-DD HH:mm:ss'}

      static info(msg) {
        Logger
          .transport('info')
          .info(`${moment().format(this.format)}: ${msg}`)
      }

      static error(msg) {
        Logger
          .transport('error')
          .error(`${moment().format(this.format)}: ${msg}`)
      }
    }
    global.dd = Logger.alert
  }
}

module.exports = AppProvider
