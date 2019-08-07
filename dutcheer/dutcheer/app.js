//app.js

const login = require('config').login;
App({
  onLaunch: function() {
    // 展示本地存储能力

    // 登录
    wx.login({
      success: res => {
        console.log(res.code);
        wx.request({ //详细用法看小程序简易教程
          url: login,
          data: {
            code: res.code
          },
          success: function(res) {
            console.log(res)
            wx.setStorage({
              key: "openid", //按照微信所说返回一个sessionid，但实际上应该是可以用其他来代替，因为没有cookie机制，所以这个sessionid是放在header里传过去的，只是标识用户而已，而且百度云无法生成他所说的随机数，所以这里我直接吧openid加密返回来的，数据存在数据库里
              data: res.data.openid
            })
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})