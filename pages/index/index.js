 const fetch = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sildes:[],
    categories:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 小程序没有跨域没有ajax，wx.request（）提供方法来交互
    // 请求的地址必须在管理后台添加白名单
    // 域名必须备案，服务端必须采用Https
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/comin_soon',
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

    fetch('slides').then(res => {
      this.setData({ sildes:res.data})
    })
    fetch('categories').then(res => {
      this.setData({ categories: res.data })
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