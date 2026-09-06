// here the promise which gets executed first will be marked as completed, if the resolve 
// is fulfilled, it will be executed, or the reject will be executed

const { resolve } = require("path")

const function5=()=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            resolve("the promise is resolved")
        }, 400);
    })
}

const function6=()=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            reject("the promise is rejected")
        }, 500);
    }
    )
}

Promise.race([function5(), function6()])
.then(result=>
{
    console.log(result)
}

)
.catch(result=>
{
    console.log(result)
}
)
