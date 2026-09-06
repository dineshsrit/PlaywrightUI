
class employee
{
    static company='SRIT'
    constructor(name,id,desg)
    {
        this.name=name
        this.id=id
        this.desg=desg
    }

    getemployeeinfo()
    {
        return `the name is ${this.name} and id is ${this.id} and the designation is ${this.desg} and the 
        company is ${employee.company}`
    }
}


const e1=new employee('dinesh', 10, 'testlead')
const e2=new employee('pandiya',12, "lead")

console.log(e1.getemployeeinfo())
console.log(e2.getemployeeinfo())