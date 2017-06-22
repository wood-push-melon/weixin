// pages/info/info.js
var app = getApp()
Page({
  data: {
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
    channelButtons: [
      {
        "text": "规划项目",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "政策申报",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "新闻快讯",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "侨梦苑",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "收起",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "冬奥产业",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "企业助手",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "趣说财经",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "历史文化",
        "image": '../../images/icon_overview.png'
      },
      {
        "text": "校园味道",
        "image": '../../images/icon_overview.png'
      }
    ]
  },
  onLoad: function () {
  }
}) 