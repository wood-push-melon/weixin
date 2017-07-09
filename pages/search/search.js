//获取应用实例
var WxSearch = require('/search_func.js')
var app = getApp()
Page({
  data: {
    searchArray: [
      {'key': '石景山', 'isClicked': false},
      {'key': '孵化器', 'isClicked': false},
      {'key': '北京保险产业园', 'isClicked': false},
      { 'key': '人工智能', 'isClicked': false },
      { 'key': 'A轮', 'isClicked': false }
      ],
    searchMindArray: ['Ai石景山', '石景山投资', '创业孵化器', '人工智能创业', 'A轮融资']
  },
  onLoad: function () {
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, this.data.searchArray, true);
    WxSearch.initMindKeys(this.data.searchMindArray);
  },
  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);

  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    setTimeout(function () {
      WxSearch.wxSearchHiddenPancel(that);
    }, 200)
  }
})
