// components/preview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	classic:{
		type:Object,
		observer:function(newval){
			if(newval){
				var typeText={
					 100: "电影",
					200: "音乐",
					300: "句子"
				}[newval.type]
			}
			this.setData({
				typeText
			})
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	typeText:String
  },

  /**
   * 组件的方法列表
   */
  methods: {
	
	
  }
})
