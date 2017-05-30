//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // userInfo: {}
    // text: Array("特朗普今日会见奥巴马", "习近平主席到访北京石景山区", "钢铁侠上映", "甜甜今天过520"),
    text: Array("特朗普今日会见奥巴马", "习近平主席到访北京石景山区"),
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,
    // marquee2copy_status: false,
    // marquee2_margin: 60,
    size: 14,
    gap : 5 * 14, //每条新闻间隔5个字符
    orientation: 'left',//滚动方向
    interval: 20 // 时间间隔
  },
  onShow: function () {
    // 页面显示
    var vm = this;
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    var len = '';
    var length; // 新闻标题数组字符串拼接总长度(px)
    for (var i = 0; i < vm.data.text.length; i++) {
      len = len.concat(vm.data.text[i]);
    }
    vm.setData({
      length: len.length * vm.data.size + vm.data.text.length * vm.data.gap,
      windowWidth: windowWidth,
      // marquee2_margin: length < windowWidth ? windowWidth - length : vm.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
    });
    console.log(vm.data.length);
    console.log(vm.data.windowWidth);
    vm.run();// 第一个字消失后立即从右边出现
  },
  run: function () {
    var vm = this;
    var interval = setInterval(function () {
      var bound = vm.data.length < vm.data.windowWidth ? vm.data.windowWidth : vm.data.length;
      if (-vm.data.marqueeDistance <= bound) {
        vm.setData({
          marqueeDistance: vm.data.marqueeDistance - vm.data.marqueePace,
        });
      } else {
        clearInterval(interval);
        vm.setData({
          marqueeDistance: bound
        });
        vm.run();
      }
    }, vm.data.interval);
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  toLoginView: function () {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  toSearchView: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  onLoad: function () {
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
