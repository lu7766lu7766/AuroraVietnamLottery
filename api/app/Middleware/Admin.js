'use strict'

class LocalMiddleware
{
  async handle({auth}, next) {
    const user = await auth.getUser()
    if (user.role_id == Constant('Role').ADMIN_CODE)
    {
      await next()
    }
    else
    {
      throw [Codes.NO_PERMISSION, false]
    }
  }
}

module.exports = LocalMiddleware
