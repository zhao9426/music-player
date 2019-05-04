// 判断一个字符串是否可能是图片的url
export default function isPicture(str){
    let pPattern = /https?:\/\/.+\.(jpg|gif|png)$/ig;
    let urlDataPattern = /^(data:image\/png;base64,).*/ig;
    if(typeof str === "string" && (pPattern.test(str)|| urlDataPattern.test(str))){
        return true;
    } 
    return false;
}