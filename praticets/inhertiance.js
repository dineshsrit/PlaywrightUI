const { VehicleModule } = require("@faker-js/faker")

class vechicle
{

    constructor(make, model, year)
    {
        this.make=make
        this.model=model
        this.year=year
    }

    startengine()
    {
        console.log(`${this.model} engine is started`)
    }

    stopengine()
    {
        console.log(`${this.model} engine is stopped`)
    }
}

class car extends vechicle
{
    constructor(name)
    {
        super(this.make,this.model, this.year)
        this.name=name
    }
}

class truck extends vechicle
{
    constructor(make, model, year,loadingcapacity)
    {
        super(make, model, year)
        this.loadingcapacity=loadingcapacity
    }

    gettruckinfo()
    {
        return ` ${this.make} loading capacity is ${this.loadingcapacity}`
    }
}

const t1=new truck('ashok', 'test',2002,1000)
const truckinfo=t1.gettruckinfo()
console.log(truckinfo)
t1.startengine()
t1.stopengine()