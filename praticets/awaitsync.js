
//async function always returns promise


async function testdata()
{
    console.log("testing of async function")
    return "dinesh"
}

testdata()
.then(result=>
{
    console.log(result)
}
)

function somedata()
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            const rad=Math.random()
            console.log(rad)
            if(rad<0.5)
            {
                resolve("the random is ", rad)
            }
            else
            {
                reject(new Error("number is not random"))
            }
        }, 2000);
    })
}

async function testingdata()
{
    try{
    let data=  await somedata()
    console.log(data)
    }
    catch(error){
        console.log(error)
    }
  
}

testingdata()