'use strict'

const CommonCodes = use('ApiCodes/Common')

class PageValidator
{
  get rules() {
    return {
      page: 'sometimes|number',
      perPage: 'sometimes|number'
    }
  }

  get messages() {
    return {
      'page.number': CommonCodes.PAGE_TYPE_ERROR,
      'perPage.number': CommonCodes.PERPAGE_TYPE_ERROR
    }
  }
}

module.exports = PageValidator
