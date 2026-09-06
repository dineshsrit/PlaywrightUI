
const fs=require('fs')

fs.readFile("sample.txt","utf-8", (error, data)=>
{
    if(error)
    {
        throw new error()
    }
    else
    {
        console.log(data)
    }
})

console.log("this is async file")