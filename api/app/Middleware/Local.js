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
      throw new ApiErrorException(Codes('Common').ERROR)
    }
  }
}

module.exports = LocalMiddleware
