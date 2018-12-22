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
      static service(name) { return new (app.use(`App/Service/${name}Service`)) }

      static model(name) { return new (app.use(`App/Models/${name}`)) }

      static repository(name) { return new (app.use(`App/Repositories/${name}Repositories`)) }
    }
    global.Factory = (name) => { return app.use(`App/Factories/${name}`) }
    global.Constant = (name) => { return app.use(`App/Constants/${name}`) }
    global.Model = (name) => { return app.use(`App/Models/${name}`) }
    global.Validator = (name) => { return app.use(`App/Validators/${name}Validator`) }
    global.Codes = Constant('Codes')
    // global.service = name => new (this.app.use(`App/Service/${name}Service`))
    // global.model = name => new (this.app.use(`App/Models/${name}`))
    global.GetIncrement = async table => (await DB.table('INFORMATION_SCHEMA.TABLES').select('AUTO_INCREMENT')
      .where('TABLE_SCHEMA', 'vietnam')
      .where('TABLE_NAME', table)
      .first()).AUTO_INCREMENT
  }
}

module.exports = AppProvider
