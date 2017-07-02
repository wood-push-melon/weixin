// pages/special/special_01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '1',
    isCollect: false, //是否被收藏
    news: {image: ['../../images/logo.jpg',], title: '投资专题第一篇文章', url: '../../pages/special/special_01'}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var id = this.data.id;
    var pageData = wx.getStorageSync('pageData') || []
    for (var i = 0; i < pageData.length; i++) {
      if (pageData[i].id == id) {
        this.setData({ isCollect: true });
        break;
      }
    }
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

  /**
   * 页面收藏功能
   */
  collectOrNot: function () {
    var pageData = wx.getStorageSync('pageData') || []
    if (this.data.isCollect) {
      for (var i = 0; i < pageData.length; i++) {
        if (pageData[i].id == this.data.id) {
          pageData.splice(i, 1);
          this.setData({ isCollect: false });
          break;
        }
      }
    } else {
      var images = new Array(this.data.news.image);
      var item = { id: this.data.id, title: this.data.news.title, images: images, url: this.data.news.url };
      pageData.unshift(item);
      this.setData({ isCollect: true });
    }

    wx.setStorageSync('pageData', pageData);
  },
})