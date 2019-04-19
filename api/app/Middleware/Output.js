'use strict'

const CommonCodes = use('ApiCodes/Common')

class OutputMiddleware
{
  async handle({request, response}, next) {
    await next()
    if (request.originalUrl().indexOf('/download') === -1)
    {
      return response.send({
        code: [CommonCodes.OK],
        data: response._lazyBody.content
      })
    }
  }
}

module.exports = OutputMiddleware
