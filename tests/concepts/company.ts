import { log } from "console";

class company{
    name:string
    id: number
    desgn:string
    salary:number

    constructor(name, id, desgn, salary)
    {
        this.name=name;
        this.id=id
        this.desgn=desgn
        this.salary=salary
    }


   
}

 const c1=new company("dinesh",10,"test",1000)
 console.log(c1);
 