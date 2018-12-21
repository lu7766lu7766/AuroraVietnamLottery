const {hooks} = require('@adonisjs/ignitor')

hooks.after.providersBooted(() =>
{
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
})
