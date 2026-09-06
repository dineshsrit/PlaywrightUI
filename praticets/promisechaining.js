const { resolve } = require("path");

function findevennumber(num, delay)
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            if(num%2==0)
            {
                resolve("the number is even")
            }
            else
            {
                reject(new Error("the number is not even"))
            }
        }, delay);
    })

}

findevennumber(2,1000)
.then(result=>
{
    console.log(result)
    return findevennumber(3, 1000)
}
).then(result=>
{
    console.log(result)
}
).catch(error=>{
    console.log(error)
})