// components/classic/music/index.js
import {paginationBev} from "../../behaviors/behavior.js"
const mMgr=wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
	behaviors:[paginationBev],

  properties: {
	src:String,
	title:String
  },

// detached:function(){
// 	mMgr.stop()
// },
attached:function(){
	this._recoverStatus()
	this._montorSwitch()
},
  /**
   * 组件的初始数据
   */
  data: {
		playIng:false,
		playSrc:'images/player1.png',
		PauseSrc:"images/player2.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
	onplay:function(){
		if(!this.data.playIng){
		this.setData({
			playIng:true,			
		})
		mMgr.src=this.properties.src;
		mMgr.title=this.properties.title
		// console.log(this.properties.src);
		}else{
			this.setData({
				playIng:false,			
			})
			mMgr.pause()
		}
	},
	_recoverStatus:function(){
		if(mMgr.paused){
			this.setData({
				playIng:false
			})
			// console.log("11111");
			return 
		}
		if(this.properties.src==mMgr.src){
			this.setData({
				playIng:true
			})
		}
	},
	_montorSwitch:function(){
		mMgr.onPlay(()=>{
			this._recoverStatus()
		})
		mMgr.onPause(()=>{
			this._recoverStatus()
		})
		mMgr.onStop(()=>{
			this._recoverStatus()
		})
		mMgr.onEnded(()=>{
			this._recoverStatus()
		})
		
		
	}
  }
})
