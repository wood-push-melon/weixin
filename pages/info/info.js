// pages/info/info.js
var app = getApp()
Page({
  data: {
    isChannelFolded: false,

    slideData: [
      {
        "title": "石景山好风景石景山好风景石景山好风景石景山好风景石景山好风景",
        "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' 
      },
      {
        "title": "213123石景山好风景石景山好风景石景山好风景",
        "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' 
      },
      {
        "title": "341石景山好风景石景山好风景石景山好风景石景山好风景石景山好风景",
        "image": 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' 
      },
      {
        "title": "石景山342山好风景石景山好风景石景山好风景石景山好风景",
        "image": '../../images/banner_guide.png' 
      }
    ],
    channelButtons: [
      {
        "id": '0',
        "text": "规划项目",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '1',
        "text": "政策申报",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '2',
        "text": "新闻快讯",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '3',
        "text": "侨梦苑",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '4',
        "text": "更多",
        "image": '../../images/icon_enterprise.png'
      }
    ],
    channelButtonsFulllist: [
      {
        "id": '0',
        "text": "规划项目",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '1',
        "text": "政策申报",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '2',
        "text": "新闻快讯",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '3',
        "text": "侨梦苑",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '4',
        "text": "收起",
        "image": '../../images/icon_policy.png'
      },
      {
        "id": '5',
        "text": "冬奥产业",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '6',
        "text": "企业助手",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '7',
        "text": "趣说财经",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '8',
        "text": "历史文化",
        "image": '../../images/icon_overview.png'
      },
      {
        "id": '9',
        "text": "校园味道",
        "image": '../../images/icon_overview.png'
      }
    ],
    articleData: [
      {
        "id": '0',
        "title": "中关村虚拟现实产业园在石景山启动（附规划和政策）",
        "image": [
          '../../images/logo.jpg',
          '../../images/banner_guide.png'
        ]
      }
    ]
  },

  foldButtons: function (event) {
    if (event.currentTarget.dataset.id == '4') {
      if (this.data.isChannelFolded) {
        this.data.channelButtons = this.data.channelButtonsFulllist.slice(0,5),
        this.data.channelButtons[4].text = '更多',
        this.data.channelButtons[4].image = '../../images/icon_enterprise.png'
      } else {
        this.data.channelButtons = this.data.channelButtonsFulllist,
        this.data.channelButtons[4].text = '收起',
        this.data.channelButtons[4].image = '../../images/icon_policy.png'
      }
      this.setData({
        isChannelFolded: !this.data.isChannelFolded,
        channelButtons: this.data.channelButtons
      })
    }
  },

  onLoad: function () {
  }
}) 