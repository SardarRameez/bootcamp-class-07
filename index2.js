let num=Math.floor(Math.random()*10)%2==0?true:false
const promise=function(){
    let fetchApi=new Promise((resolve,reject)=>{
        if(num){
            resolve("success")
        }
        else{
            reject("Fail")
        }
    })
    return fetchApi
}
// let res=promise()
// console.log(res)
async function fetchData(){
    try {
        let data=await promise()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()