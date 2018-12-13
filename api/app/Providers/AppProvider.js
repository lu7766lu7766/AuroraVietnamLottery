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
    const Logger = app.use('Adonis/Src/Logger')
    global.dd = Logger.info
    global._ = require('lodash')
    global.moment = require('moment')
    global.DB = use('Database')
    global.Create = class Create
    {
      static service(name) { return new (app.use(`App/Service/${name}`)) }

      static model(name) { return new (app.use(`App/Models/${name}`)) }

      static repository(name) { return new (app.use(`App/Repositories/${name}`)) }
    }
    global.Constant = (name) => { return app.use(`App/Constants/${name}`) }
    global.Model = (name) => { return app.use(`App/Models/${name}`) }
    global.Validator = (name) => { return app.use(`App/Validators/${name}`) }
    global.Codes = Constant('Codes')
    // global.service = name => new (this.app.use(`App/Service/${name}Service`))
    // global.model = name => new (this.app.use(`App/Models/${name}`))
  }
}

module.exports = AppProvider
