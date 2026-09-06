

function reverse(num)
{
    if(num>=0 && num<=9)
    {
        return num
    }

    let reversenum=0;
    while(num!=0)
    {
        reversenum=reversenum*10+(num%10);
        num=Math.floor(num/10)
    }

    return reversenum;
}

console.log(reverse(1))
console.log(reverse(8))
console.log(reverse(73738))