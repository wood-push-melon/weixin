//main.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // motto: '登录',
    userInfo: {}
  },
  //事件处理函数
  toUserView: function () {
    wx.navigateTo({
      url: '../user/user'
    })
  },
  // toLoginView: function () {
  //   wx.navigateTo({
  //     url: '../login/login'
  //   })
  // },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
