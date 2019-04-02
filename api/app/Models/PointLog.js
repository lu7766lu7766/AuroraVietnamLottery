'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PointLog extends Model
{
  source_user() {
    return this.hasOne('App/Models/User', 'source_user_id', 'id')
  }

  target_user() {
    return this.hasOne('App/Models/User', 'target_user_id', 'id')
  }

  type() {
    return this.hasOne('App/Models/PointLogType', 'type_id', 'id')
  }
}

module.exports = PointLog
