//promise.all() is commonly used when you want to perform mulitple asynchronous operations
//in parallel and wait for all them to complete before moving on

const { resolve } = require("path");



//if one of the promise is rejected, then the file result will be rejected
//case 1:
// const function1=()=>
// {
//     return new Promise((resolve)=>
//     {
//         setTimeout(() => {
//             resolve("this is promiseall")

//         }, 1000);
//     })
// }

// const function2=()=>
// {
//     return new Promise((resolve)=>
//     {
//         setTimeout(()=>
//         {
//             resolve("this is promise all 2")
//         })
//     })
// }

// Promise.all([function1(), function2()])
// .then(result=>
// {
//     console.log(result)
// }
// ).catch(error=>
// {
//     console.log(error)
// }
// )

//case 2: when any one promise returns as rejected, then all the promise marked as rejected

const function3=()=>{
    return new Promise((resolve)=>
    {
        setTimeout(() => {
            const data=[10,20,30]
            resolve(data)
        }, 1000);
    })
}

const function4=()=>{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            resolve("the claim is rejected")
        }, 1000);
    })
}


Promise.all([function3(), function4()])
.then(result=>
{
    console.log(result)
}
)
.catch(error=>
{
    console.log(error)
}
)

// const names=["dinesh","jack", "signature"]

// const newnames=names.filter((res)=>
// {
//     if(res.length>6)
//     {
//         return res;
//     }
// })

//console.log(newnames)
