const { CLIENT_RENEG_LIMIT } = require("tls")

const numbers=[1,2,4,4,5,6,7,7]
const names=["dinesh", "raju", "dinesh","jack", "jack"]
//using set constructor
const newnumber=[...new Set(numbers)]
console.log(newnumber)

const newnames=[...new Set(names)]
console.log(newnames)