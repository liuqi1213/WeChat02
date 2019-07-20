import {config} from "../config.js"
const tips={
	1:"默认错误",
	1005:"appkey无效",
	3000:"期刊不存在"
}
 class HTTP{
	request(params){
		if(!params.method){
			params.method="GET"
		}
		wx.request({
			url:config.url+params.url,
			method:params.method,
			data:params.data,
			header:{
				'content-type':'application/json',
				'appkey':config.appkey
			},
			success:(res)=>{
				let code=res.statusCode.toString();
				if(code.startsWith("2")){
					params.success(res.data)
				}else{
					let errCode=res.data.err_code
					this.showCode(errCode)
				}
			},
			fail:(err)=>{
				wx.showToast({
					title:"网络中断",
					icon:'none',
					duration:2000
				})
			}
		})
	}
	showCode(errCode){
		if(!errCode){
			errCode=1
		}
		wx.showToast({
			title:tips[errCode],
			icon:'none',
			duration:2000
		})
	}

}
export {HTTP}