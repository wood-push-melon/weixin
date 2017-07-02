// pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageData: {},
    hasData: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pageData = wx.getStorageSync('pageData') || []
    if (pageData.length != 0) {
      this.setData({
        pageData: pageData,
        hasData: true});
      console.log(this.data.hasData);
    } else {
      this.setData({hasData: false})
      console.log(this.data.hasData);
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

  // 跳转重点项目文章页面
  toPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    var pageData = this.data.pageData;

    var clickedPage;
    for(var i = 0; i < pageData.length; i++) {
      
      if (pageData[i].id == id) {
        clickedPage = pageData[i];
        break;
      }
    }
    wx.navigateTo({
      url: clickedPage.url
    })
  },
})