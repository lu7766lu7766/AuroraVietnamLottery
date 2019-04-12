'use strict'

const Task = use('Task')
const shell = require('shelljs')

class FetchLotteryNumbers extends Task
{
  static get schedule() {
    return '31 19 * * * *'
    // return '*/10 * * * * *'
  }

  async handle() {
    // shell.exec('curl -G http://127.0.0.1:3333/fetch?date=' + moment().subtract(1, 'days').format('YYYY-MM-DD'))
    shell.exec('curl -G http://127.0.0.1:3333/fetch?date=' + moment().format('YYYY-MM-DD'))
  }
}

module.exports = FetchLotteryNumbers
