// components/books/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	books:Object
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
	onTap:function(){
		const bid=this.properties.books.id
		wx.navigateTo({
        url: `/pages/book-detail/index?bid=${bid}`,
		})
	}
  }
})
