const picCollection = require('../../config').picCollection;


Page({
  data: {
    invitetext:"现邀您相聚大工",
    starttext:"开启相聚大工之旅",
    right_disappear: false,
    left_disappear: false,
    screenWidth: 0,
    leftx: 0,
    rightx: 0,
    y: 0,
    scale: 2,
    activity: "",
  },

  onLoad: function() {
    let that = this;
    console.log(picCollection)
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        var leftx = (res.screenWidth / 750) * 375
        var rightx = (res.screenWidth / 750) * 750
        console.log(res.screenWidth)
        that.setData({
          leftx: leftx,
          rightx: rightx,
          screenWidth: res.screenWidth
        })
      },
    })
  },
  leftchange: function(left) {
    let that = this
    console.log(left.detail.x)
    if (left.detail.x > that.data.leftx) {
      that.setData({
        leftx: that.data.leftx
      })
    }
    if (left.detail.x < (that.data.screenWidth / 750) * 135) {
      that.setData({
        left_disappear: true,
      })

    }
  },
  rightchange: function(right) {
    var that = this
    console.log(right.detail.x)
    if (right.detail.x < that.data.rightx) {
      that.setData({
        rightx: that.data.rightx
      })
    }
    if (right.detail.x > (that.data.screenWidth / 750) * 990) {
      that.setData({
        right_disappear: true

      })

    }
  },

  bindGetUserInfo: function(e) { //现在获取用户信息是调用这个button，详情见简易教程，跟下面的wx.getUserInfo这个接口的功能一致
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.showAndGo();
      },
      fail: function() {
        if (e.detail.errMsg == "getUserInfo:ok") {
          console.log(e)
          wx.setStorage({ //将用户信息缓存起来，下次调用
            key: "userInfo",
            data: e.detail.userInfo,
          })
          console.log("执行")
          wx.setStorage({
            key: 'login',
            data: true,
          })
          var openid = wx.getStorageSync('openid');
          wx.request({
            url: picCollection,
            data: {
              nickname: e.detail.userInfo.nickName,
              pic: e.detail.userInfo.avatarUrl,
              openid: openid,
            },
            success: function(res) {
              console.log(res);
              wx.setStorage({
                key: 'joinnum',
                data: res.data,
              })
              that.showAndGo();
            },
            fail: function() {
              that.showAndGo();

            }
          })

        } else {
          console.log("deny auth")
        }
      }
    })

    //console.log(e);

  },

  showAndGo: function() {
    var that = this;
    that.setData({
      invitetext:"感谢您的到来",
      activity: "disappear",
      starttext:"正在加载...",
    })

    setTimeout(function() {
      wx.navigateTo({
        url: '../70years/70years',
      })
    }, 1500)
  },

  onShow:function(){
    this.setData({
      invitetext:"现邀您相聚大工",
      activity: "",
      starttext: "开启相聚大工之旅",
    })
  },

  onShareAppMessage: function (options) {

    var that = this;
    var joinnum = wx.getStorageSync('joinnum')
    return {
      title: "我是相聚大工第" + joinnum + "位参与者，来和我一起祝大工70岁生日快乐！",
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
})