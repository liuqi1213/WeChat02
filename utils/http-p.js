import {config} from "../config.js"
const tips={
	1:"默认错误",
	1005:"key错误",
	3000:"该内容不存在"
}
class HTTP{
	request({url,data={},method="GET"}){
		return new Promise((resolve,reject)=>{
			this._request(url,data,method,resolve,reject)
		})
	};
	_request(url,data={},method="GET",resolve,reject){
		wx.request({
			url:config.url+url,
			method:method,
			data:data,
			header:{ 'content-type': 'application/json',
        'appkey': config.appkey},
			success: (res) => {
				let code=res.statusCode.toString()
				if(code.startsWith("2")){
						resolve(res.data)
				}else{
					let code=res.data.errcode
					reject()
					this.showErr(code)
				}
			},
			fail: (res) => {
				reject()
				this.showErr(1)
			}
		})
	}
	showErr(err){
		if(!err){
			err=1
		}
		wx.showToast({
			title:tips[err],
			icon:"",
			duration:2000
		})
	}
}

export {HTTP}