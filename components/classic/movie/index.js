// components/classic/movie/index.js
import {paginationBev} from "../../behaviors/behavior.js"
Component({
  /**
   * 组件的属性列表
   */
	
	behaviors:[paginationBev],
 //  properties: {
	// img:String,
	// content:String
 //  },
	
  /**
   * 组件的初始数据
   */
  data: {
	movieimg:"img/movie@tag.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
