const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// 将数字转换为数组
function convertToStarsArray(stars) {
  var num = stars / 2;
  var array = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1);
    }
    else {
      if ((i - num) === 0.5) {
        array.push(0.5)
      }
      else {
        array.push(0);
      }
    }
  }
  return array;
}

// 请求数据,需传入完整的url
function getData(url, params, dosomething) {
  wx.request({
    url: url,
    data: params,
    success: function (res) {
      dosomething(res)
    }
  })
}

// 提示框
function myshowmodel(title, content) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: false,
  })
}

function myshowloading(title){
  wx.showLoading({
    title: title,
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  convertToStarsArray: convertToStarsArray,
  getData: getData,
  myshowmodel: myshowmodel,
  myshowloading: myshowloading
}
