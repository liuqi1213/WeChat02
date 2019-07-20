import {HTTP} from "../utils/http.js"
class LikeModel extends HTTP{
	like(behavior,artID,category){
		let url=behavior=='like'?'like':'like/cancel'
		this.request({
			url:url,
			method:"POST",
			data:{
				art_id:artID,
				type:category
			},
			success: (res) => {
				console.log(res);
			}
		})
	}
	
	getclassicLikeStatus(artId,category,callback){
		this.request({
			url:"classic/"+category+"/"+artId+"/favor",
			success:callback
		})
	}
}
export {LikeModel}