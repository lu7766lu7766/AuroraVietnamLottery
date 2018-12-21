'use strict'

class ReportRepositories
{
  async getTargetDayNumbers(date) {
    return await DB.table('lotteries')
      .select('date')
      .where('date', date)
  }

  async addRowBySql(sqlBody) {
    await Model('Lottery').create(sqlBody)
  }
}

module.exports = ReportRepositories
