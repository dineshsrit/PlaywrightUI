
class hospital
{
    constructor(id, name, capacity, service)
    {
        this.id=id
        this.name=name
        this.capacity=capacity
        this.service=service
    }
}

const h1=new hospital(10,'test',100,'ip')
console.log(h1.capacity);

