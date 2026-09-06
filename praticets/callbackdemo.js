
function greet(callback)
{
    console.log("this is call back example")
    callback()
}

function info()
{
    console.log("this is call back function example")
}

greet(info)


function fetchuser(id,callback)
{
    setTimeout(() => {
        const users={
            1:{id:10, name:'jack'},
            2:{id:12, name:'puli'}
        }

        const user=users[id]
        if(user)
        {
            callback(null, user)
        }

        else
        {
            callback("user not found", null)
        }

    }, 2000);
}

    function handleuser(error, user)
    {
        if(error)
        {
            console.log("Error", error)
        }
        else
        {
            console.log(user)
        }
    }

    fetchuser(1,handleuser)