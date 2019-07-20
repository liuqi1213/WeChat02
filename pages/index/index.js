import {ClassicModel} from "../../models/classic.js"
import {LikeModel} from "../../models/like.js"
let calssicmodel=new ClassicModel()
let likemodel=new LikeModel()
import {HTTP} from "../../utils/http.js"
let http=new HTTP()
//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   resData:null,
   first:false,
   latest:true,
   likeCount:0,
   likeStatus:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	 calssicmodel.getLatest((res)=>{
		this.setData({
			resData:res,
			likeCount:res.fav_nums,
			likeStatus:res.like_status
		})
			// console.log(res);
	 })
  
  
  
  //   http.request({
  //   	url:"classic/latest",
		// success:(res)=>{
		// 	console.log(res)
		// }
  //   })
 //  
 //  wx.request({
 //  	url:"http://bl.7yue.pro/v1/like/cancel",
	// method:"POST",
	// 
	// data:{
	// 	art_id:1,
	// 	type:100
	// },
	// header:{
	// 	 "content-type":"application/x-www-form-urlencoded",
	// 	 // "content-type":"json",
	// 	'appkey':"RdshydjBvcYZhMZC",
	// },
	// success: (res) => {
	// 	console.log(111);
	// 	console.log(res);
	// }
 //  })
  },





onlike:function(event){
	let behavior=event.detail.behavior;		
	likemodel.like(behavior,this.data.resData.id,this.data.resData.type);

},
onNext:function(event){
	this.updataClassic("next")
},
onPrevious:function(event){
	// let index=this.data.resData.index
	// calssicmodel.onPrevious(index,(res)=>{
		// console.log(res);
	// 	this.setData({
	// 		resData:res,
	// 		first:calssicmodel.isFirst(res.index),
	// 		latest:calssicmodel.isLatest(res.index)
	// 	})
	// })
	this.updataClassic("previous")
},
updataClassic:function(nextOrprevious){
	let index=this.data.resData.index;
	calssicmodel.getClassic(index,nextOrprevious,(res)=>{
		console.log(res);
			this.getLikeStatus(res.id,res.type)
			this.setData({
			resData:res,
			first:calssicmodel.isFirst(res.index),
			latest:calssicmodel.isLatest(res.index)
		})
	})
},

getLikeStatus:function(artID,category){
	likemodel.getclassicLikeStatus(artID,category,res=>{
		this.setData({
			artID:res.fav_nums,
			category:res.like_status
		})
	})
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(calssicmodel.isFirst());
    
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