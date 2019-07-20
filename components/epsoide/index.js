// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	index:{
		type:Number,
		observer:function(newval,oldval){
			let val=newval<10?"0"+newval:newval;
			// console.log(val);
			this.setData({
				_index:val
			})
		}
	}
  },

attached:function(){
	let date=new Date();
	let year=date.getFullYear();
	let month=date.getMonth()
	this.setData({
		year:year,
		month:this.data.months[month]
	})
},


  /**
   * 组件的初始数据
   */
  data: {
	year:"",
	month:"",
	_index:"",
	months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","一月","一月",]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
