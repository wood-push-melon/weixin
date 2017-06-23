// pages/consult/consult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleData: [
      {
        "id": '0',
        "isFolded": true,
        "title": "内资公司如何在石景山注册1",
        "text": "北京易华录信息技术股份有限公司成立于2001年4月，是中国华录集团旗下控股的上市公司（股票代码300212）。易华录紧紧把握政府管理创新需求，发挥央企优势，将金融资本和产业资本相结合，应用物联网、云计算、大数据等先进技术，实施“1+4”发展战略，以智能交通为主体，同时发展智慧城市、公共安全、蓝光存储和健康养老业务，将线上与线下相结合，科技与文化相融合，打造以数据为核心的城市互联网运营商，为政府、社会、公众提供公益和增值服务，成为政府社会化服务的主要提供商。"
      },
      {
        "id": '1',
        "isFolded": true,
        "title": "内资公司如何在石景山注册2",
        "text": "234242北京易华录信息技术股份有限公司成立于2001年4月，是中国华录集团旗下控股的上市公司（股票代码300212）。易华录紧紧把握政府管理创新需求，发挥央企优势，将金融资本和产业资本相结合，应用物联网、云计算、大数据等先进技术，实施“1+4”发展战略，以智能交通为主体，同时发展智慧城市、公共安全、蓝光存储和健康养老业务，将线上与线下相结合，科技与文化相融合，打造以数据为核心的城市互联网运营商，为政府、社会、公众提供公益和增值服务，成为政府社会化服务的主要提供商。"
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

  foldText: function (event) {
    var id = event.currentTarget.dataset.id;
    this.data.articleData[id].isFolded = !this.data.articleData[id].isFolded;
    this.setData({
      articleData: this.data.articleData
    })
  }
})