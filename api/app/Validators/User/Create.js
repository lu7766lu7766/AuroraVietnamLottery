'use strict'
const RoleContant = use('Constants/Role')
const UserCodes = use('ApiCodes/User1000')

class UserCreateValidator
{
  get rules() {
    // dd(/09[0-9]{8}/.test(this.ctx.request.input('phone')))
    return {
      userName: 'required|unique:users,user_name',
      password: 'required',
      nickName: 'string',
      phone: 'required|regex:^09[0-9]{8}$',
      verifyCode: 'required|length:6',
      roleID: 'number|in:' + RoleContant.validateString()
    }
  }

  get messages() {
    return {
      'userName.required': UserCodes.USER_NAME_IS_REQUIRED,
      'userName.unique': UserCodes.USER_EXISTS,
      'password.required': UserCodes.PASSWORD_IS_REQUIRED,
      'phone.required': UserCodes.PHONE_IS_REQUIRED,
      'phone.regex': UserCodes.PHONE_FORMAT_ERROR,
      'verifyCode.regex': UserCodes.VERIFY_CODE_IS_REQUIRED,
      'verifyCode.length': UserCodes.VERIFY_CODE_LENGTH_ERROR,
      'roleID.in': UserCodes.ROLE_NOT_EXISTS
    }
  }
}

module.exports = UserCreateValidator
