import {HTTP} from "../utils/http-p.js"
class keyWordModel extends HTTP{
	key="q"
	maxlength=10
	getValue(){
	const word=wx.getStorageSync(this.key)
	if(!word){
		return []
	}else{
		return word
	}
	}
	addToHistory(keyword){
		let value=this.getValue()
		let has=value.includes(keyword)
		if(!has){
			let length=value.length
			if(length>=this.maxlength){
				value.pop()
			}
			value.unshift(keyword)
			wx.setStorageSync(this.key,value)
			
		}
	}
	getHot(){
		return this.request({
			url:"/book/hot_keyword"
		})
	}
}
export {keyWordModel}
