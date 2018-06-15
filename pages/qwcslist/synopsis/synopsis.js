// pages/qwcslist/synopsis/synopsis.js
const utils = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleid:'',
    imgwidth:300,
    desc:[],
    contents:[],
    finalresult:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var width = wx.getSystemInfoSync().windowWidth-40
    this.setData({
      titleid:options.titleid,
      imgwidth: width
    })
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
    var titleid = this.data.titleid
    var url = getApp().globalData.qwcsurl + "index/getdesc?titleid=" + titleid
    var params = []
    
    utils.getData(url,params,function(res){

      

      that.setData({
        desc:res.data.desc[0],
        contents:res.data.contents,
        finalresult:res.data.finalresult
      })
    })
  },

  /**
   * 动态判断
   */
  share:function(){
   
    var citype = this.data.citype
    if(citype == 1){
      wx.redirectTo({
        url: '/pages/qwcslist/qwcslist',
      })
    }
  },
  start:function(){
  
    var titleid = this.data.titleid
    var myurl = getApp().globalData.qwcsurl + "index/starttest?question_title=" + titleid
    var params = []
    utils.getData(myurl,params,function(res){
      if(res.statusCode != 200){
        utils.myshowmodel('哦哦，出错了','但不影响您继续的操作！')
      }
    }) 

    var contents = this.data.contents
    var finalresult = this.data.finalresult
    wx.setStorageSync('contents', contents)
    wx.setStorageSync('finalresult', finalresult)
    
    var myurl = 'detail/detail?titleid=' + titleid
    wx.navigateTo({
      url: myurl
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
    
    var url = '/pages/qwcslist/qwcslist'
    return {
      title: '发现一个好玩的性格测试，快来试一试！',
      path: url
    }
  }
})