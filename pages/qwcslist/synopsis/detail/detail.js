// pages/qwcslist/synopsis/detail/detail.js
const utils = require("../../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    titleid:'',
    // 定义选中标题的初始值0
    selectedTitle: "0",
    swiperHeight:320,
    imgwidth:320,
    contents:[],
    finalresult:[],
    
    // 当前的选项（包括问题和其答案）
    currentQA:[]
  },
  
  //定义滑块改变的事件处理函数，将current赋值给selectedTitle
  bindChange: function (e) {
    
    var i = e.detail.current
    var contents = this.data.contents
    this.setData({
      selectedTitle: i,
      currentQA: contents[i]
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var swiperheight = wx.getSystemInfoSync().windowHeight
    var width = wx.getSystemInfoSync().windowWidth - 40
    this.setData({
      titleid:options.titleid,
      imgwidth: width,
      swiperHeight: (swiperheight - 70),
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var contents = wx.getStorageSync('contents')
    var finalresult = wx.getStorageSync('finalresult')

    this.setData({
      contents: contents,
      finalresult: finalresult,
      currentQA: contents[0]
    })
  },

 // 当选择了某一个答案之后得到的相应的携带的value，并将其传给setcurrentitem
  radiovaluechange:function(event){
    var nextid = event.currentTarget.dataset.nextid
    
    this.setcurrentitem(nextid)
  },

 // 根据传过来的value，for循环contents内容，找到与之对应的value，再设置当前选项为该下标
  setcurrentitem:function(nextid){
    var currentisresult = false
    var contents = this.data.contents
    for(let i=0;i<contents.length;i++){
      let currentquestion = contents[i].question
      if (currentquestion.qwcs_question_id == nextid){
        currentisresult = true
        this.setData({
          selectedTitle: i,
          currentQA: contents[i]
        })
      }
    }

    

    if (currentisresult == false){

      var result = this.data.finalresult

      console.log(result)
      for (let j = 0; j < result.length;j++){

        if (nextid == result[j].qwcs_question_id){
          
          // console.log("进来了，j=" + j)
          // var array = new Array()
          // array['question'] = result[j];

          // console.log(result[j])

          // array['anwser'] = []
          this.setData({
            currentQA: result[j]
          })

          // console.log("array=" + array)
        }
      }
    }

  },

  /**
   * 分享函数
   */

  share:function(){

  },
  // 返回首页
  backfirst:function(){
    wx.navigateBack({
      delta:2
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
    var titleid = this.data.titleid
    var mypath = '/pages/qwcslist/qwcslist'
    return {
      title: '我做了这个性格测试，你也来试一试吧！',
      path: mypath
    }
  }
})