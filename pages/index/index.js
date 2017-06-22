//index.js
var app = getApp()
Page({
  data: {
    isLogin: app.globalData.isLogin,
    text: Array("特朗普今日会见奥巴马", "习近平主席到访北京石景山区"),
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,
    size: 14,
    gap : 5 * 14, //每条新闻间隔5个字符
    orientation: 'left',//滚动方向
    interval: 20, // 时间间隔

    open: false, //控制侧边栏开闭
    windowWidth: wx.getSystemInfoSync().windowWidth,

    outlineButtons: [
      {
        "text": "区情概况",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "重点企业",
        "image": '../../images/icon_enterprise.png'
      },
      {
        "text": "投资政策",
        "image": '../../images/icon_policy.png'
      }
    ]
  },
  onShow: function () {
    // 页面显示
    var vm = this;
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    var len = '';
    var length; // 新闻标题数组字符串拼接总长度
    for (var i = 0; i < vm.data.text.length; i++) {
      len = len.concat(vm.data.text[i]);
    }
    vm.setData({
      isLogin: app.globalData.isLogin ? true : false,
      length: len.length * vm.data.size + vm.data.text.length * vm.data.gap,
      windowWidth: windowWidth
    });
    vm.run(); // 第一个字消失后立即从右边出现
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
  tapAvatar: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },
  // toLoginView: function () {
  //   wx.navigateTo({
  //     url: '../login/login'
  //   })
  // }, // 跳转登录页面
  toSearchView: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }, // 跳转搜索页面
  toOverviewView: function () {
    wx.navigateTo({
      url: '../overview/overview'
    })
  }, // 跳转区情概况页面
  toEnterpriseView: function () {
    wx.navigateTo({
      url: '../enterprise/enterprise'
    })
  }, // 跳转重点企业页面
  toPolicyView: function () {
    wx.navigateTo({
      url: '../policy/policy'
    })
  }, // 跳转投资政策页面
  toPlanView: function () {
    wx.navigateTo({
      url: '../plan/plan'
    })
  }, // 跳转发展规划页面
  toSpecialView_01: function () {
    wx.navigateTo({
      url: '../special/special_01'
    })
  }, // 跳转投资专题（1）页面
  toSpecialView_02: function () {
    wx.navigateTo({
      url: '../special/special_02'
    })
  }, // 跳转投资专题（2）页面
  toSpecialView_03: function () {
    wx.navigateTo({
      url: '../special/special_03'
    })
  }, // 跳转投资专题（3）页面
  toSpecialView_04: function () {
    wx.navigateTo({
      url: '../special/special_04'
    })
  }, // 跳转投资专题（4）页面
  toKeyView: function () {
    wx.navigateTo({
      url: '../key/key'
    })
  }, // 跳转重点项目页面
  toKeyView_01: function () {
    wx.navigateTo({
      url: '../key/key_01'
    })
  }, // 跳转重点项目（1）页面
  toKeyView_02: function () {
    wx.navigateTo({
      url: '../key/key_02'
    })
  }, // 跳转重点项目（2）页面
  toConsultView: function () {
    wx.navigateTo({
      url: '../consult/consult'
    })
  }, // 跳转投资咨询页面
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
