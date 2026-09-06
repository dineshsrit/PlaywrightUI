
const number=[1,2,3,5,6,90]
const [a,b,c,...test]=number

console.log(a+" "+b+" "+c+" " + test)

const student={
    studentname:"dinesh",
    std:10,
    school:"sms",
    grade:c
}

const {studentname, std, school, quality="good"}=student

console.log(studentname+" "+std+" "+school+ " "+quality)

//directly passing the object as parameter
// function printinfo(student)
// {
//     console.log(student.studentname)
// }

// printinfo(student)

function printinfo({studentname, std})
{
    console.log(studentname+ " "+ std)
}

printinfo(student)
