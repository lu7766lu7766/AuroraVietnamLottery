'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler
{
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, ctx) {
    const res = ctx.response
    res.status(200)
    switch (error.name)
    {
      case 'ValidationException':
        res.send({
          code: _.map(error.messages, 'message'),
          data: false
        })
        break
      case 'UserNotFoundException':
      case 'PasswordMisMatchException':
        res.send({
          code: [Codes('User1000').USER_OR_PASSWORD_ERROR],
          data: false
        })
        break
      case 'InvalidApiToken':
        res.send({
          code: [error.status],
          data: false,
          msg: error.code
        })
        break
      case 'ApiErrorException':
        ApiErrorException.handle(error, ctx)
        break
      default:
        Log.error(error)
        dd('handle!!', error.status, error.name, error.message, error.messages)
        res.status(error.status).send(error.message)
        break
    }
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error, {request}) {
  }
}

module.exports = ExceptionHandler
