// pages/user/user.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toFavoriteView: function () {
    wx.navigateTo({
      url: '../favorite/favorite'
    })
  }, // 跳转收藏页面
  toAboutView: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  }, // 跳转关于页面
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