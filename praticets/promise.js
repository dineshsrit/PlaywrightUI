//when any aschyronous operation takes place, in this scenario promise is called
//promise is resolved to fullfilled, pending, rejected

const pro=new Promise((resolve, reject)=>
{ 
    setTimeout(() => {
        const rad=Math.random()
    if(rad>0)
    {
        resolve(rad)
    }
    else
    {
        reject(new Error("the number is greater than zero"))
    }
    }, 2000);

}
)

pro.then(result=>{
    console.log("the random number is", result)
}).catch(error=>
{
    console.log("the error is", error)
}
)
