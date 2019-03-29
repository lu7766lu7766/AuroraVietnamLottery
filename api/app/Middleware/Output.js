'use strict'

class OutputMiddleware
{
  async handle({response}, next) {
    await next()
    response.send({
      code: Codes('Common').OK,
      data: response._lazyBody.content
    })
    // try
    // {
    //   await next()
    //   response.send({
    //     code: Codes.SUCCESS,
    //     data: response._lazyBody.content
    //   })
    // } catch (e)
    // {
    //   if (typeof e == 'object' && typeof e[0] == 'number')
    //   {
    //     const {0: code, 1: data} = e
    //     response.send({
    //       code, data
    //     })
    //   }
    //   else
    //   {
    //     response.status(e.status || 500).send({
    //       data: e.message,
    //       code: Codes.UNCATCH
    //     })
    //   }
    // }
  }
}

module.exports = OutputMiddleware
