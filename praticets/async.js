

//in asynchromius programming, javascript allows task to be started and continue in the back ground
//while the program executes other code, this is especially useful for the task that takes time
// like fetching the data from server or reading files


function aysncbehav()
{
    console.log("start")
    setTimeout(() => {
        console.log("iam aysnch function")
    }, 20000);
    console.log("end")
}

aysncbehav()