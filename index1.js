let num=Math.floor(Math.random()*10)%2==0?true:false
function promise(){
    let fetchApi=new Promise((resolve,reject)=>{
        if(num){
            resolve()
        }
        else{
            reject()
        }
    })
    return fetchApi;
}

let n=promise()
n.then(()=>{
    console.log("Success")
})
.catch(()=>{
    console.log("failure")
})
// fetchApi.then(()=>{
//     console.log("Success")
// })
// .catch(()=>{
//     console.log("failure")
// })


