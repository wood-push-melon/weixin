//index.js
var app = getApp()
Page({
  data: {
    feed_idx: 1,
    isMapClicked: false,

    outlineButtons: [
      {
        "id": '0',
        "title": "区情概况",
        "image": '../../images/icon_overview.png',
        "url": '../outline/overview'
      },
      {
        "id": '1',
        "title": "重点企业",
        "image": '../../images/icon_enterprise.png',
        "url": '../enterprise/enterprise'
      },
      {
        "id": '2',
        "title": "投资政策",
        "image": '../../images/icon_policy.png',
        "url": '../outline/policy'
      }
    ],
    specialButtons: [
      {
        "id": '0',
        "isClicked": false,
        "title": "北京“侨梦苑”",
        "image": '../../images/bg.jpg',
        "url": '../special/special_01'
      },
      {
        "id": '1',
        "isClicked": false,
        "title": "冬奥产业",
        "image": '../../images/bg.jpg',
        "url": '../special/special_02'
      },
      {
        "id": '2',
        "isClicked": false,
        "title": "保险产业园",
        "image": '../../images/bg.jpg',
        "url": '../special/special_03'
      },
      {
        "id": '3',
        "isClicked": false,
        "title": "新首钢",
        "image": '../../images/bg.jpg',
        "url": '../special/special_04'
      }
    ],
    keyButtons: [
      {
        "id": '0',
        "isClicked": false,
        "title": '北京保险产业园',
        "image": '../../images/key/北京保险产业园.jpg',
        "url": '../key/key_01'
      },
      {
        "id": '1',
        "isClicked": false,
        "title": '世界侨商创新中心',
        "image": '../../images/key/世界侨商创新中心.jpg',
        "url": '../key/key_02'
      },
      {
        "id": '2',
        "isClicked": false,
        "title": '首钢•城市织补\n创新工场东区',
        "image": '../../images/key/首钢城市织补创新工场东区.jpg',
        "url": '../key/key_03'
      }
    ],
    consultTitle: [
      {
        "id": '0',
        "isClicked": false,
        "title": '内资公司如何在石景山注册',
        "url": '../consult/consult_01'
      },
      {
        "id": '1',
        "isClicked": false,
        "title": '1213内资公司如何在石景山注册',
        "url": '../consult/consult_02'
      },
      {
        "id": '2',
        "isClicked": false,
        "title": '343内资公司如何在石景山注册',
        "url": '../consult/consult_01'
      }
    ],
    feedsData: [
      {
        "id": '0',
        "title": '特朗普今日会见奥巴马', 
        "url": '../article/article_01'
      },
      {
        "id": '1',
        "title": '中关村VR产业园落户石景山',
        "url": '../article/article_02'
      }
    ],
  },
  
  swiperChange: function (event) {
    this.setData({
      feed_idx: event.detail.current + 1
    })
  },
  
  // 跳转搜索页面
  toSearchPage: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }, 
  // 跳转滚动新闻文章页面
  toFeedsPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.feedsData[id].url
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
  // 跳转规划地图页面
  toMapPage: function () {
    this.setData({
      isMapClicked: true
    })
    wx.navigateTo({
      url: '../plan/map'
    })
  },
  // 跳转投资专题文章页面
  toSpecialPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    var currentButton = this.data.specialButtons[id];
    for (var i = 0; i < this.data.specialButtons.length; i++) { 
      this.data.specialButtons[i].isClicked = false;
    }
    this.data.specialButtons[id].isClicked = true;
    this.setData({
      specialButtons: this.data.specialButtons
    });
    setTimeout(function () {
      wx.navigateTo({
        url: currentButton.url
      })
    },200)
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
    var currentButton = this.data.keyButtons[id];
    for (var i = 0; i < this.data.keyButtons.length; i++) {
      this.data.keyButtons[i].isClicked = false;
    }
    this.data.keyButtons[id].isClicked = true;
    this.setData({
      keyButtons: this.data.keyButtons
    });
    setTimeout(function () {
      wx.navigateTo({
        url: currentButton.url
      })
    }, 200)
  }, 
  // 跳转投资咨询页面
  toConsultPage: function () {
    wx.navigateTo({
      url: '../consult/consult'
    })
  }, 
  // 跳转投资咨询文章页面
  toConsultPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    var currentButton = this.data.consultTitle[id];
    for (var i = 0; i < this.data.consultTitle.length; i++) {
      this.data.consultTitle[i].isClicked = false;
    }
    this.data.consultTitle[id].isClicked = true;
    this.setData({
      consultTitle: this.data.consultTitle
    });
    setTimeout(function () {
      wx.navigateTo({
        url: currentButton.url
      })
    }, 200)
  }, 

  onShow: function () {
  },

  onLoad: function () {
    var that = this
    //获取滚动新闻条目数量
    this.setData({
      feed_len: this.data.feedsData.length
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
