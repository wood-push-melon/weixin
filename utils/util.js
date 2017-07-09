function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function regexConfig(){
  var reg = {
    email:/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
    phone:/^1(3|4|5|7|8)\d{9}$/
  }
  return reg;
}

/**
  * 页面收藏功能
  */
function collectOrNot(that) {
  var pageData = wx.getStorageSync('pageData') || []
  if (that.data.isCollect) {
    for (var i = 0; i < pageData.length; i++) {
      if (pageData[i].id == that.data.id) {
        pageData.splice(i, 1);
        that.setData({ isCollect: false });
        break;
      }
    }
  } else {
    var item = { id: that.data.id, title: that.data.news.title, images: that.data.news.image, url: that.data.news.url };
    pageData.unshift(item);
    that.setData({ isCollect: true });
  }
  wx.setStorageSync('pageData', pageData);
}

module.exports = {
  formatTime: formatTime,
  regexConfig:regexConfig,
  collectOrNot: collectOrNot
}