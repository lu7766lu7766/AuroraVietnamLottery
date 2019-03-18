export default {
  login: {
    uri: 'login',
    method: 'post'
  },
  register: {
    uri: 'register',
    method: 'post'
  },
  info: {
    user: {
      uri: 'user'
    }
  },
  options: {
    uri: 'options',
    gameType: {
      uri: 'gameType'
    }
  },
  bet: {
    uri: 'bet',
    method: 'post'
  }
}

export const GET = 'get'
export const POST = 'post'
export const PUT = 'put'
export const DELETE = 'delete'
export const SuccessCodes = [0]
export const UnLoginCode = 401

/**
 * 取得符合目前domain的 host config
 */
export const apiHosts = {
  local: 'localhost:3333',
  test: '202.153.169.28:3333',
  stable: ''
}