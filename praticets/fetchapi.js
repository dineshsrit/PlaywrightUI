

const function10=async()=>
    {
    let userinfo=await fetch("https://reqres.in/api/users")
    
    console.log(await userinfo.text())
    }

    function10()