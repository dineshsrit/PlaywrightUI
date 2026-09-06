//in the promise.any(), if the first promise is rejected, it will wait untill the first promise is resolved
//2. if the all the promise are rejected, then it will be marked as rejected
//3. if all the promise are resolved or fulfilled, then it will be marked as fulfilled
//4. if even one promise is resolved. then that promise will be fulfilled, despite the reject is executed
//first

const { resolve } = require("path")

const function7=()=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            reject("the first promise is resolved")
        }, 1000);
    })
}

const function8=()=>{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            reject("the promise is rejected")
        }, 500);
    })
}

const function9=()=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>{
            reject("the second promise resolved")
        }, 1000)
    })
}

Promise.any([function7(), function8(), function9()])
.then(result=>
{
    console.log(result)
}
)
.catch((error)=>
{
//    for(const err of error.errors)
//    {
//         console.log(err)
//    }
    error.errors.forEach((err)=>
    {
        console.log(err)
    })
}
)