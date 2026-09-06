//where all the promise irrespective of resolved or rejected, all the promise
//will be handled



const function1=()=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
                resolve("the promise is resolved")
        }, 2000);
    })
}

const function2=()=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            reject("the promise is rejected")
        }, 2000);
    })
}
//it returns the array of promise, where need to iterate each promise.
Promise.allSettled([function1(), function2()]).then(result=>
{
    result.forEach(result=>
    {
        if(result.status=== 'fulfilled')
        {
           console.log(result.value)
        }
        else
        {
            console.log(result.reason)
        }
    })
}
)