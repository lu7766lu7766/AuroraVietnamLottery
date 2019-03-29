const {hooks} = require('@adonisjs/ignitor')

hooks.after.providersBooted(() =>
{
  // Validator

  const Validator = use('Validator')

  const numberStringFn = async (data, field, message, args, get) =>
  {
    const value = get(data, field)
    // value has word not number
    if (isNaN(parseInt(value)))
    {
      throw message
    }
  }

  Validator.extend('numberString', numberStringFn)

  const sometimesFn = async (data, field, message, args, get) =>
  {
    const value = get(data, field)
    // value has word not number
    if (!_.isUndefined(value) && value == '')
    {
      throw message
    }
  }
  Validator.extend('sometimes', sometimesFn)
})
