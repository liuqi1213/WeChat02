import {HTTP} from "../utils/http.js"
class ClassicModel extends HTTP{
	//获取页面数据
	getLatest(callback){
		this.request({
			url:"classic/latest",
			success:(res)=> {
				callback(res)
				this.setLatestIndex(res.index);
				let key=this.getKey(res.index);
				wx.setStorageSync(key,res)
			}
		})
	};
	getMyFavor(callback){
		this.request({
			url:"classic/favor",
			success:res=>{
				callback(res)
			}
		})
	};
	
	// onPrevious(index,callback){
	// 	this.request({
	// 		url:"classic/"+index+"/previous",
	// 		success:(res) => {
	// 			callback(res);
	// 			
	// 		}
	// 	})
	// };
	//获取上一页下一页数据
	getClassic(index,nextOrprevious,callback){
		//加入缓存
		let key=nextOrprevious=="next"?this.getKey(index+1):this.getKey(index-1)
		let classic=wx.getStorageSync(key);
		if(!classic){
		this.request({
			url:"classic/"+index+"/"+nextOrprevious,
			success:(res) => {
				callback(res);
				let classic=wx.setStorageSync(this.getKey(res.index),res)
			}
		})}else{
			callback(classic)
		}
	};
	//判断是否第一页
	isFirst(index){
		return index==1?true:false
	}
	//判断最后一页  当前页和数据最终页对比 
	isLatest(index){
		let latestIndex=this.getLatestIndex()
		return latestIndex==index?true:false
	}
	getLatestIndex(){
		let index=wx.getStorageSync("latest");
		return index 
	}
	//写入缓存的是页面的最终页
	setLatestIndex(index){
		wx.setStorageSync("latest",index)
	}
	
	getKey(index){
		let key="_classic"+index
		return key
		}
}
export {ClassicModel}