// pages/books/index.js
import {BookModel} from "../../models/book.js"
import {random} from "../../utils/common.js"
const bookModel=new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
	books:[],
	more:""
  },


	seraching:function(){
		this.setData({
			seraching:true
		})
	},
	onCancel:function(){
		this.setData({
			seraching:false
		})
	},
	//内置函数 触底
	onReachBottom:function(){
		this.setData({
			more:random(16)
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		bookModel.getHotList().then((res)=>{
			this.setData({
				books:res
			})
			console.log(res);
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


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})