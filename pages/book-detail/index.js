import {
	BookModel
} from "../../models/book.js"
import {LikeModel} from "../../models/like.js"
let bookModel = new BookModel()
let likeModel=new LikeModel()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		book: null,
		comments: [],
		likeStatus: false,
		likeCount: 0,
		posting:false
	},

	/**
	 * 生命周期函数--监听页面加载
	 * 
	 */
	onLoad: function(options) {
		const bid = options.bid
		console.log(options);
		const detail = bookModel.getDetail(bid)
		const comments = bookModel.getComments(bid)
		const likeStatus = bookModel.getLikeStatus(bid)
// 		detail.then(res => {
// 			console.log(res);
// 			this.setData({
// 				book: res
// 			})
// 		})
// 		comments.then(res => {
// 			console.log(res);
// 
// 			this.setData({
// 				comments: res.comments
// 			})
// 		})
// 		likeStatus.then(res => {
// 			console.log(res);
// 
// 			this.setData({
// 				likeStatus: res.like_status,
// 				likeCount: res.fav_nums
// 			})
// 		})
	wx.showLoading()
	Promise.all([detail,comments,likeStatus]).then((res)=>{
		this.setData({
			book:res[0],
			comments:res[1].comments,
			likeStatus:res[2].like_status,
			likeCount:res[2].fav_nums
			
		})
		wx.hideLoading()
	})
	},
	
	onlike:function(event){
		let behavior=event.detail.behavior
		likeModel.like(behavior,this.data.book.id,400)
	},
	onFakePost:function(){
		this.setData({
			posting:true
		})
	},
	onCancel:function(){
		this.setData({
			posting:false
		})
	},
	onPost:function(event){
		let value=event.detail.value||event.detail.text //通过event.detail.value和event.detail.text来判断是input输入还是标签点击
		console.log(event.detail.value);
				console.log(event.detail.text);
		
		if(!value){
			return
		}
		if(value.length>12){
			wx.showToast({
				title:"输入超过12",
				icon:'none'
			})
			return
		}
		bookModel.postComment(this.data.book.id,value).then(res=>{
			wx.showToast({
				title:"+1",
				icon:"none"
			})
			this.data.comments.unshift({content:value,nums:1})
			this.setData({
				comments:this.data.comments,
				noComment:false,
				posting:false
			})
		})
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
