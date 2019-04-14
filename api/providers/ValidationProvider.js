'use strict'

const {ServiceProvider} = require('@adonisjs/fold')

class ValidationProvider extends ServiceProvider
{
  async existsFn(data, field, message, args, get) {
    const value = get(data, field)
    if (!value)
    {
      return
    }

    const [table, column] = args
    const row = await DB.table(table).where(column, value).first()
    if (!row)
    {
      throw message
    }
  }

  async numberStringFn(data, field, message, args, get) {
    const value = get(data, field)
    // value has word not number
    if (isNaN(parseInt(value)))
    {
      throw message
    }
  }

  boot() {
    const Validator = use('Validator')
    Validator.extend('exists', this.existsFn.bind(this))
    Validator.extend('numberString', this.numberStringFn.bind(this))
  }
}

module.exports = ValidationProvider
