// components/like/index.js
Component({
  /**

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesimg: "img/like.png",
    noimg: "img/like@dis.png",
  },

  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
			},
	readOnly:{
		type:Boolean
	}
    },

    methods: {
      onLike: function (event) {
		  if(this.properties.readOnly){
			  return
		  }
        let status = this.properties.status;
        let count = this.properties.count;

        count = status ? count - 1 : count + 1;
        this.setData({
          status: !status,
          count: count
        })
        let behavior = this.properties.status ? "like" : "cancel";
        this.triggerEvent("like", {
          behavior: behavior
        }, {})

//         count = status ? count + 1 : count - 1;
//         this.setData({
//           count: count,
//           status: !status
//         })
// 
      }
    }
  })
