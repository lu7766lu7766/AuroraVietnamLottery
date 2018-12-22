'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PointLog extends Model
{
  creator() {
    return this.hasOne('App/Models/User', 'creator_id', 'id')
  }

  user() {
    return this.hasOne('App/Models/User', 'user_id', 'id')
  }
}

module.exports = PointLog
