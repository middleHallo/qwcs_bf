// pages/qwcslist/qwcslist.js
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qwcslist:[],
    imgurl:''
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
    var that = this
    var url = getApp().globalData.qwcsurl + "index/getlist"
    var params = []
    var result = utils.getData(url,params,function(res){
        
        that.setData({
          qwcslist:res.data.content,
        })
    })
    
  },
  gotosynopsis:function(event){
    var titleid = event.currentTarget.dataset.titleid;
    var myurl = "/pages/qwcslist/synopsis/synopsis?titleid=" + titleid 
    wx.navigateTo({
      url: myurl,
    })
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
  
  }
})