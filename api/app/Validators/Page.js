'use strict'

class PageLoginValidator
{
  get rules() {
    return {
      page: 'sometimes|number',
      perPage: 'sometimes|number'
    }
  }

  get messages() {
    const commonCodes = Codes('Common')
    return {
      'page.number': commonCodes.PAGE_TYPE_ERROR,
      'perPage.number': commonCodes.PERPAGE_TYPE_ERROR
    }
  }
}

module.exports = PageLoginValidator
