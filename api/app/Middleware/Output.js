'use strict'

class OutputMiddleware
{
  async handle({response}, next) {
    try
    {
      await next()
      response.send({
        code: Codes.SUCCESS,
        data: response._lazyBody.content
      })
    } catch (e)
    {
      if (typeof e == 'object' && typeof e[0] == 'number')
      {
        const code = e[0]
        const data = e[1]
        response.send({
          code, data
        })
      }
      else
      {
        // console.log(e.status)
        response.status(e.status).send({
          data: e,
          code: Codes.UNCATCH
        })
      }
    }
  }
}

module.exports = OutputMiddleware
