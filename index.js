// Callback

function BeforeBreakfast(breakfast){
    console.log("Before breakfast")
    breakfast(AfterBreakfast)
}
function BreakFast(AfterBreakfast){
    setTimeout(()=>{
        console.log("Prepare breakfast")  
        AfterBreakfast()
    },1000)
}
function AfterBreakfast(){
    console.log("After prepare breakfast")
}

BeforeBreakfast(BreakFast)
