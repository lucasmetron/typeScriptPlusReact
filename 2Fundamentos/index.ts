//1 number
let x:number = 10
console.log(x)
console.log(typeof x)
 
let y:number = 20.456454
console.log(y)
console.log(typeof y)


//2 string
let firstname:string = 'Lucas'
console.log(firstname)
console.log(typeof firstname)


let fullname:string
const lastName:string = "Rosa"
fullname = firstname + " " +lastName

console.log(fullname)
console.log(typeof fullname)


// 3 boolean
let a:boolean = false
console.log(a)
console.log(typeof a)


//inferencia e annotation

const ann: string = "teste"
let inf = "teste"

// inf = 1 //vai dar erro pois foi inciado com uma string

//dESAFIO

let num:number = 10

let string = num.toString()

console.log(`O numero é ${string}`)
