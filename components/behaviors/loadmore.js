const loadmore =Behavior({
	data:{
		dataArray:[],
		total:null,
		noneResult:false 
	},
	methods:{
		setMoreData(dataArray){
			const tempArray=this.data.dataArray.concat(dataArray)
			this.setData({
				dataArray:tempArray
			})
		},
		getCurrentStart(){
			return this.data.dataArray.length
		},
		setTotal(total){
			this.data.total=total
			if(total==0){
				this.setData({
					noneResult:true
				})
			}else{
				this.setData({
					noneResult:false
				})
			}
		},
		hasMore(){
			if(this.data.dataArray.length>=this.data.total){
			}else{
				return true
			}
		},
		initialize(){
			this.setData({
				dataArray:[],
				noneResult:false
			})
			this.data.total=null
		}
		
	}
})
export {loadmore}