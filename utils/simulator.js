var config = require('../config.js')
var paser = require('./parser.js')

var loginUrl = config.loginUrl
var infoUrl = config.infoUrl
var electiveUrl = config.electiveUrl
var achievementUrl = config.achievementUrl
var cookieStr = ''

var data = require('../mock/data.js')

var login = function (username, password) {
  // TODO
}

var getAchievement = function (successFunc, failFunc) {
  
  wx.request({
    url: achievementUrl,
    header: {
      'Cookie': cookieStr
    },
    success: function (res) {
      var data = []
      try {
        data = res.data
        successFunc(data)
      } catch (error) {
        failFunc('parse error')
      }
    },
    fail: function (res) {
      failFunc('network error')
    }
  })
}

var getElective = function () {
  // TODO
  return []
}

var getInfo = function () {
  // TODO
  return []
}

module.exports = {
  'getAchievement': getAchievement,
  'login': login,
  'getElective': getElective,
  'getInfo': getInfo
}
