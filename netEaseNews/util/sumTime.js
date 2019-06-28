const moment = require('moment')
const translate = require('./translate')
const sumTime = (time) => translate(moment(time, 'YYYY-MM-DD HH:mm:ss').fromNow())

module.exports = sumTime

