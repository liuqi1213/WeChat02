// components/serach/index.js
import {keyWordModel} from "../../models/keyword.js"
import {BookModel} from "../../models/book.js"
import {loadmore} from "../behaviors/loadmore.js"
let keywordModel=new keyWordModel()
let bookmodel=new BookModel()
Component({
		
	
  /**
   * 组件的属性列表
   */
  behaviors: [loadmore],
  properties: {
	more:{
		type:String,
		observer:'loadMore'
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	historyWords:[],
	hotWords:[],
	searching:false,
	loading:false,
	loadingCenter:false
  },
attached(){
	let historyWords=keywordModel.getValue()
	this.setData({
		historyWords
	})
	keywordModel.getHot().then((res)=>{
		// console.log(res.hot);
		this.setData({
			hotWords:res.hot
		})
	})
},
  /**
   * 组件的方法列表
   */
  methods: {
	 loadMore(){
		 // console.log(123123);
		 if(!this.data.q){
			 return
		 }
		 if(this._isLocked()){
			 return
		 }
		 if(this.hasMore()){
		 this._locked()
		 bookmodel.serach(this.getCurrentStart(),this.data.q).then((res)=>{
			this.setMoreData(res.books)
			this._unloaded()
		 },()=>{
			 this._unloaded()//请求失败解锁
		 })}
	 },
	onCancel:function(){
		this.triggerEvent('cancel',{},{})
		this.initialize()//除去重复数据
	},
	onConfirm(option){
		this._showResult()
		
		this._showLoadingCenter()
		let value=option.detail.value||option.detail.text;
		let historyWords=keywordModel.getValue()
		this.setData({
			historyWords
		})
		bookmodel.serach(0,value).then((res)=>{
			this.setMoreData(res.books)
			this.setTotal(res.total)
			this.setData({
				q:value
			})
			keywordModel.addToHistory(value);
			this._hideLoadingCenter()
		})
	},
	onDelete(){
		this._closeResult()
		this.initialize()//除去重复数据
	},
	_showResult(){
		this.setData({
			searching:true
		})
	},
	_isLocked(){
		return this.data.loading?true:false
	},
	_locked(){
		this.setData({
			loading:true
		})
	},
	_unloaded(){
		this.setData({
			loading:false
		})
	},
	_closeResult(){
		this.setData({
			searching:false,
			q:""
		})
	},
	_showLoadingCenter(){
		this.setData({
			loadingCenter:true
		})
	},
	_hideLoadingCenter(){
		this.setData({
			loadingCenter:false
		})
	}
	
	
	
  }
})
