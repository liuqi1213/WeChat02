// components/button-image/index.js
Component({
  options:{
	  multipleSlots:true
  },
  
  /**
   * 组件的属性列表
   */
  
  properties: {
	openType:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
	GetUserInfo(event){
		this.triggerEvent('getuserinfo',event.detail,{})
	}
  }
})
