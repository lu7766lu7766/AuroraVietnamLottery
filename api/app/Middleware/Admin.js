'use strict'

class AdminMiddleware
{
  async handle({auth}, next) {
    const user = await auth.getUser()
    if (user.role_id == Constant('Role').ADMIN_CODE)
    {
      await next()
    }
    else
    {
      throw new ApiErrorException(Codes('User1000').NO_PERMISSION)
    }
  }
}

module.exports = AdminMiddleware
