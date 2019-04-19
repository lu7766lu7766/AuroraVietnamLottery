'use strict'

const Helpers = use('Helpers')
const Drive = use('Drive')

class DownloadController
{
  async app({response}) {
    const filePath = 'download/app-debug.apk'
    if (await Drive.exists(Helpers.tmpPath(filePath)))
    {
      response.attachment(Helpers.tmpPath(filePath), 'VietnamLottery.apk')
    }
  }
}

module.exports = DownloadController
