// pages/key/key.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleData: [
      {
        "id": '0',
        "title": '北京保险产业园',
        "image": '../../article-images/key/北京保险产业园.jpg',
        "url": '../key/key_01'
      },
      {
        "id": '1',
        "title": '世界侨商创新中心',
        "image": '../../article-images/key/世界侨商创新中心.jpg',
        "url": '../key/key_02'
      },
      {
        "id": '2',
        "title": '首钢•城市织补创新工场东区',
        "image": '../../article-images/key/首钢城市织补创新工场东区.jpg',
        "url": '../key/key_03'
      },
      {
        "id": '3',
        "title": '银河商务区L地块',
        "image": '../../article-images/key/银河商务区L地块.jpg',
        "url": '../key/key_04'
      },
      {
        "id": '4',
        "title": '刘娘府A2部分地块',
        "image": '../../article-images/key/刘娘府A2部分地块.jpg',
        "url": '../key/key_05'
      },
      {
        "id": '5',
        "title": '西井地块',
        "image": '../../article-images/key/西井地块.jpg',
        "url": '../key/key_06'
      },
      {
        "id": '6',
        "title": '创业创新园',
        "image": '../../article-images/key/创业创新园.png',
        "url": '../key/key_07'
      },
      {
        "id": '7',
        "title": '集体土地的再利用项目',
        "image": '../../article-images/key/集体土地再利用项目.png',
        "url": '../key/key_08'
      },
      {
        "id": '8',
        "title": '衙门口综合环境整治项目',
        "image": '../../article-images/key/衙门口综合环境整治项目.jpg',
        "url": '../key/key_09'
      },
      {
        "id": '9',
        "title": '模式口历史文化保护区修缮改造工程',
        "image": '../../article-images/key/模式口文保区修缮改造工程.jpg',
        "url": '../key/key_10'
      }
    ],
    articleData2: [
      {
        "id": '0',
        "title": '金融街（长安）中心',
        "image": '../../article-images/key/金融街长安中心.jpg',
        "url": '../key/key_11'
      },
      {
        "id": '1',
        "title": '绿地环球文化金融城',
        "image": '../../article-images/key/绿地环球文化金融城.jpg',
        "url": '../key/key_12'
      },
      {
        "id": '2',
        "title": '泰然国际大厦',
        "image": '../../article-images/key/泰然国际大厦.jpg',
        "url": '../key/key_13'
      },
      {
        "id": '3',
        "title": '泰禾长安中心',
        "image": '../../article-images/key/泰禾长安中心.jpg',
        "url": '../key/key_14'
      },
      {
        "id": '4',
        "title": '启迪•香山',
        "image": '../../article-images/key/启迪香山.jpg',
        "url": '../key/key_15'
      },
      {
        "id": '5',
        "title": '首钢•北七筒',
        "image": '../../article-images/key/首钢北七筒.jpg',
        "url": '../key/key_16'
      },
      {
        "id": '6',
        "title": '首钢•脱硫车间改造项目',
        "image": '../../article-images/key/首钢脱硫车间改造项目.png',
        "url": '../key/key_17'
      },
      {
        "id": '7',
        "title": '首钢体育大厦',
        "image": '../../article-images/key/首钢体育大厦.jpg',
        "url": '../key/key_18'
      },
      {
        "id": '8',
        "title": '古城创业大厦',
        "image": '../../article-images/key/古城创业大厦.png',
        "url": '../key/key_19'
      },
      {
        "id": '9',
        "title": '点石商务公园',
        "image": '../../article-images/key/点石商务公园.jpg',
        "url": '../key/key_20'
      }
    ],
    articleData3: [
      {
        "id": '0',
        "title": '青橄榄创业园',
        "image": '../../article-images/key/青橄榄创业园.jpg',
        "url": '../key/key_21'
      },
      {
        "id": '1',
        "title": '青橄榄创新园',
        "image": '../../article-images/key/青橄榄创新园.png',
        "url": '../key/key_22'
      },
      {
        "id": '2',
        "title": '中海大厦',
        "image": '../../article-images/key/中海大厦.jpg',
        "url": '../key/key_23'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  
  // 跳转重点项目文章页面
  toKeyPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.articleData[id].url
    })
  },
})