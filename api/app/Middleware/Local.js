'use strict'

const Env = use('Env')
const CommonCodes = use('ApiCodes/Common')

class LocalMiddleware
{
  async handle({request, response}, next) {
    if (request.ip() == Env.get('HOST'))
    {
      await next()
    }
    else
    {
      throw new ApiErrorException(CommonCodes.ERROR)
    }
  }
}

module.exports = LocalMiddleware
