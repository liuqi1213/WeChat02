import {BookModel} from "../../models/book.js"
import {ClassicModel} from "../../models/classic.js"
const bookmodel=new BookModel()
const classicModel=new ClassicModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
	authorized:false,
	bookCount:0,
	classics:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	this.userAuthorized()
	this.getBookCount()
	this.getMyFavor()
  },
  
  userAuthorized(){
	  wx.getSetting({
		  success: (data) => {
		if(data.authSetting['scope.userInfo']){
			wx.getUserInfo({
				success: (res) => {
					console.log(res);
					 this.setData({
							 userInfo:res.userInfo,
							 authorized:true
					})
				}
			})
		}
		  }
	  })
  },
  onGetUserInfo(event){
	 const userInfo=event.detail.userInfo
	 if(userInfo){
	 this.setData({
		 userInfo,
		 authorized:true
	 })
	 }
  },
  getBookCount(){
	  bookmodel.getMybookCount().then(res=>{
		  // console.log(res.count);
		  this.setData({
			  bookCount:res.count
		  })
	  })
  },
  getMyFavor(){
	  classicModel.getMyFavor(res=>{
		  this.setData({
			  classics:res
		  })
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