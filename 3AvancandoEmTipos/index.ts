
// 1 - arrays 
let numbers :number[] = [1,2,3]

numbers.push(5)
// numbers.push('5') não pode

let nomes: string[] = ['lucas','lais']

nomes.push('5')
// nomes.push(5) não pode

// 2 - Outra sintaxe array

const nums: Array<number> = [100,200]

nums.push(300)

console.log(nums)

//3 - Any
const arr1:any = [1, 'teste', true, [], {nome:'Lucas'}]

console.log(arr1)

//4 - Tipo de parametro de funções

function soma(a:number,b:number){
    console.log(a+b)
}

soma(10,5)

//5 - tipo de retorno

function greeting(name:string): string{
    return `Olá ${name}`
}

console.log(greeting('Lucas'))

// 6 função anonima

setTimeout(function(){

    const sallary:number = 1000
    // console.log(parseFloat(sallary)) não permite por que o parsefloat transforma string em numero
    // console.log(sallary)
},2000)

// 7 tipos de objetos

//função vai receber objeto que já possui tipo, obrigatoriamente tera que ter x e y com tipo number
function passCordinates(cord:{x:number, y:number}){
    console.log("X cordinates: "+ cord.x)
    console.log("Y cordinates: "+ cord.y)
}

const objCord =  {
    x:5,
    y:84.2
}

passCordinates(objCord)

//função está esperando uma array de numero como parametro 
function passCordinates2(cord:number[]){
    console.log(cord)
}

passCordinates2([5,6,9,7])

//aqui estamos tipando um objeto, porem existe maneiras mais faceis que iremos ver mais pra frente
const pessoaObj: {nome:string, surname:string} = {
    nome: 'Lucas',
    surname: 'rosa'
}

// 8 propreidades opcionais 

//passando ? na frente do parametro 'c', ele torna opcional. No caso abaixo, o typescript vai exigir apenas 2 parametros, o terceiro fica opcional 
function showNumber (a:number, b:number, c?: number){
    console.log('a: '+ a)
    console.log('b: '+ b)
    if(c){
        console.log('c: '+ c)
    }
}


showNumber(1,2,3)
showNumber(1,2)

//9 validando argumento opacional 

//Condicional que verifica se o tipo é undefined. Se o primeiro return atender, não vai para o segundo
function advencedGreeting(firstName: string, lastName?:string){
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem? `
    }

    return `Olá, ${firstName}, tudo bem? `
}


console.log(advencedGreeting('Lucas', 'Rosa'))
console.log(advencedGreeting('Lais'))

//10 Union Type

function showBalance(value: string| number){
    console.log('value é '+value)
}

showBalance(5)
showBalance('50')
// showBalance(false) nao aceita boolean

//forma antiga
const array:Array<string|number> = [5065, '45621', 'nome', 51, 'lucas']
//nova forma
const array2: (number|string)[] = [4654561, 'asdasd']

//11 avançando em unio types

function showUserRole(role:string|boolean):string{
    if(typeof role === 'boolean'){
        return `Usuário nao autorizado`
    }

    return `Usuário do tipo: ${role}`
}
console.log(showUserRole(false))
console.log(showUserRole('admin'))

//12 - types alias

//antes
function showID1(id:number|string){
    console.log(`O id é: ${id}`)
}
showID1(5)
showID1('500')
// showID1(false) não é do tipo ID

//com type alias
type ID = number | string
function showID2(id: ID){
    console.log(`O id é: ${id}`)
}
showID2(5)
showID2('500')
// showID2(false) não é do tipo ID

// 13 - interface 

interface Point  {
    x: number
    y: number
    z: number
    
}

//cords precisa respeitar o tipo Point possuindo todos os tipos
const cords:Point ={
    x: 62,
    y: 5642,
    z: 5312,
}

function showCordnates(obj: Point){
    console.log(`Cord X ${obj.x}`)
    console.log(`Cord Y ${obj.y}`)
    console.log(`Cord Z ${obj.z}`)
}

showCordnates(cords)

// 14 interface x type alias

//interface consegue ser modificada no futuro e também pode ser extendida em outra interface
interface Person {
    name: string
}

interface Person {
    age: number
}

interface PersonB extends Person{
    weight: number|string
}

const somePerson:Person={
    name:'Lucas',
    age: 30
}

const somePersonb:PersonB={
    name:'Lucas',
    age: 30,
    weight: 78.5
}

type PersonC ={
    name:string
}

// não permite colocar o type abaixo dando erro de identificador duplicado
// type PersonC ={
//     age:number
// }


// 15 Literal types

function showDirection(direction: 'left'|'right'){
    console.log(`A direção é ${direction}`)
}

showDirection('left')
// showDirection('top') não é permitido, por que podemos passar apenas left ou right

// 16 - non null assetion operators

const p = document.getElementById('paragrafo')

console.log(p!.innerHTML)

// 17 - Bigint

let n: bigint;
// n = 5 não vai aceitar por que 5 é um number normal
n = 5000n


// 18 - Symbol

let nameA: symbol = Symbol('a')
let nameB: symbol = Symbol('b')

console.log(nameA == nameB)
console.log(nameA === nameB)


