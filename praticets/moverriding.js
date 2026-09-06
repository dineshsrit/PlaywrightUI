
class car
{

    startengine()
    {
        console.log("common engine start");
        
    }


}
class audi extends car
{
    startengine()
    {
        console.log("audi engine is started")
    }

    autoparking()
    {
        console.log("audi has autoparking feature");
        
    }
}

const a1=new audi()
a1.startengine()
a1.autoparking()