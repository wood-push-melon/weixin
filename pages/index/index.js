//index.js
var app = getApp()
Page({
  data: {
    // isLogin: app.globalData.isLogin,
    // text: Array("特朗普今日会见奥巴马", "习近平主席到访北京石景山区"),
    // marqueePace: 1,//滚动速度
    // marqueeDistance: 0,
    // size: 14,
    // gap : 5 * 14, //每条新闻间隔5个字符
    // orientation: 'left',//滚动方向
    // interval: 20, // 时间间隔

    // open: false, //控制侧边栏开闭
    // windowWidth: wx.getSystemInfoSync().windowWidth,

    outlineButtons: [
      {
        "id": '0',
        "text": "区情概况",
        "image": '../../images/icon_overview.png',
        "url": '../overview/overview'
      },
      {
        "id": '1',
        "text": "重点企业",
        "image": '../../images/icon_enterprise.png',
        "url": '../enterprise/enterprise'
      },
      {
        "id": '2',
        "text": "投资政策",
        "image": '../../images/icon_policy.png',
        "url": '../policy/policy'
      }
    ],
    specialButtons: [
      {
        "id": '0',
        "image": '../../images/logo.jpg',
        "url": '../special/special_01'
      },
      {
        "id": '1',
        "image": '../../images/logo.jpg',
        "url": '../special/special_02'
      },
      {
        "id": '2',
        "image": '../../images/banner_guide.png',
        "url": '../special/special_03'
      },
      {
        "id": '3',
        "image": '../../images/logo.jpg',
        "url": '../special/special_04'
      }
    ],
    keyButtons: [
      {
        "id": '0',
        "title": '启迪香山',
        "image": '../../images/logo.jpg',
        "url": '../key/key_01'
      },
      {
        "id": '1',
        "title": '中海大厦',
        "image": '../../images/banner_guide.png',
        "url": '../key/key_02'
      },
      {
        "id": '2',
        "title": '石景山',
        "image": '../../images/logo.jpg',
        "url": '../key/key_01'
      }
    ],
    consultTitle: [
      {
        "id": '0',
        "title": '内资公司如何在石景山注册'
      },
      {
        "id": '1',
        "title": '1213内资公司如何在石景山注册'
      },
      {
        "id": '2',
        "title": '343内资公司如何在石景山注册'
      }
    ]
  },
  // onShow: function () {
  //   // 页面显示
  //   var vm = this;
  //   var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
  //   var len = '';
  //   var length; // 新闻标题数组字符串拼接总长度
  //   for (var i = 0; i < vm.data.text.length; i++) {
  //     len = len.concat(vm.data.text[i]);
  //   }
  //   vm.setData({
  //     isLogin: app.globalData.isLogin ? true : false,
  //     length: len.length * vm.data.size + vm.data.text.length * vm.data.gap,
  //     windowWidth: windowWidth
  //   });
  //   vm.run(); // 第一个字消失后立即从右边出现
  // },
  // run: function () {
  //   var vm = this;
  //   var interval = setInterval(function () {
  //     var bound = vm.data.length < vm.data.windowWidth ? vm.data.windowWidth : vm.data.length;
  //     if (-vm.data.marqueeDistance <= bound) {
  //       vm.setData({
  //         marqueeDistance: vm.data.marqueeDistance - vm.data.marqueePace,
  //       });
  //     } else {
  //       clearInterval(interval);
  //       vm.setData({
  //         marqueeDistance: bound
  //       });
  //       vm.run();
  //     }
  //   }, vm.data.interval);
  // },
  // tapAvatar: function (e) {
  //   if (this.data.open) {
  //     this.setData({
  //       open: false
  //     });
  //   } else {
  //     this.setData({
  //       open: true
  //     });
  //   }
  // },
  
  // 跳转搜索页面
  toSearchPage: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }, 
  // 跳转区情概况、重点企业、投资政策页面
  toOutlinePage: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.outlineButtons[id].url
    })
  }, 
  // 跳转发展规划页面
  toPlanPage: function () {
    wx.navigateTo({
      url: '../plan/plan'
    })
  }, 
  // 跳转投资专题文章页面
  toSpecialPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.specialButtons[id].url
    })
  }, 
  // 跳转重点项目页面
  toKeyPage: function () {
    wx.navigateTo({
      url: '../key/key'
    })
  }, 
  // 跳转重点项目文章页面
  toKeyPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.keyButtons[id].url
    })
  }, 
  // 跳转投资咨询页面
  toConsultPage: function () {
    wx.navigateTo({
      url: '../consult/consult'
    })
  }, 

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
