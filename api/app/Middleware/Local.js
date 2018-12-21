'use strict'

const Env = use('Env')

class LocalMiddleware
{
  async handle({request, response}, next) {
    if (request.ip() == Env.get('HOST'))
    {
      await next()
    }
    else
    {
      throw [Codes.JUST_FOR_LOCAL, false]
    }
  }
}

module.exports = LocalMiddleware
