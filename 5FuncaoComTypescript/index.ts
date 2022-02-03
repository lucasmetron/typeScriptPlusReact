// 1 - função que nao retorna nada VOID

function withoutReturn(): void {
    console.log('Essa função nao retorna nada')
    // return 5 se tentar retornar qualquer coisa, o TS vai dar erro
}

withoutReturn()

// 2 - callback como argumento

function greeting(name: string) {
    return `Olá, ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log('carregando callback')
    return f(userName)
}

console.log(preGreeting(greeting, 'Lucas'))
console.log(preGreeting(greeting, 'Laís'))

// 3 - generic function 

//<T> ou <U> é o padrão para o tipo de generic function, perceba que queremos qualquer tipo de dados desde que seja uma array e no retorno na função segue igual
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

//aqui tambem usamos o genric function para definir objetos que podem ter qualquer tipo de propriedade dentro dele
function mergeObject<T,U>(obj1:T, obj2:U):T|U{

    return{
        ...obj1,
        ...obj2,
    }
}

//aqui não importa quantas propriedades possuem dentro do objeto ou tipo e etc
console.log(mergeObject({name: 'Lucas', age: '25'}, {job: 'Developer', where: 'stefanini'}))
console.log(mergeObject({live: 'taguatinga'},{cep: 75321, ap: 312}))

// 4 - Constraint em generic function

//Aqui estamos limitando o generic a ser number ou string
function biggestNumber <T extends number | string>(a:T , b:T): T{
   let biggestNumber:T;
   //esse +a e +b faz conversão direta de string pra number caso o tipo seja string 
    if(+a > +b){
        biggestNumber = a
        
    }else{
        biggestNumber = b
    }
    return biggestNumber
}

console.log(biggestNumber(5, 10))

//não funciona por que declaramos só um generic, então ele entedende que os dois parametros precisam ser do mesmo tipo
// console.log(biggestNumber(30 , "40")) se quisermos fazer isso, devemos criar outro generic dessa forma:

// function biggestNumber <T extends number | string, U extends number | string>(a:T , b:U): T|U{
//     let biggestNumber:T|U;
//     //esse +a e +b faz conversão direta de string pra number caso o tipo seja string 
//      if(+a > +b){
//          biggestNumber = a
         
//      }else{
//          biggestNumber = b
//      }
//      return biggestNumber
//  }

// 5 - Especificar tipo de argumento 

//Essa forma abaixo é muito utilizado para usar dados que veem prontos de algum módulo ou api
function mergeArrays<T>(array1: T[], array2:T[]):T[]{
    return[
        ...array1,
        ...array2
    ]
}

//Isso evita fazer vários generics 
console.log(mergeArrays<number|string>([1,2,3], [4,5,6]))
console.log(mergeArrays<number|string>([1,2,3], ['teste','testando']))

// 6 - Parametros opcionais 

function modernGreeting(name:string, greeting?: string):string{
    if(greeting){
        return `Olá ${greeting} ${name}, tudo bem?`
    }
    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting('Lucas', 'Sr.'))
console.log(modernGreeting('Lais'))

// 7 - parametro default 

function somaDefault(n:number, m:number = 10): number{
    return n + m
}

//caso não chegue o valor de m, será o valor default 10
console.log(somaDefault(10))
console.log(somaDefault(15,15))

// 8 - tipo unknown 

//alguns resultados mais simples irão passar sem precisar fazer a validação do tipo, porém resultados e manipulações mais complexas irão dar erro
function doSomething(x:unknown){
    //dessa forma pode por que é algo simples
    console.log(x)
    //dessa forma vai dar erro por que é mais complexo
    // console.log(x[0])
}

doSomething([1,2,3])

//forma ideal 
function doSomething2(x:unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    }else if(typeof x === 'number'){
        console.log('é um numero')
    }
    //e por ai vai 
}

doSomething2([1,2,3])
doSomething2(5)

// 9 - tipo never 

// o void faz coisas no sistema mas não retorna nada, ja o never ele é utilizado para tratamentos de erros onde o sistema vai parar
function showErrorMessage(msg:string):never{
    throw new Error(msg)
}
// showErrorMessage('erro de requisição')


// 10 - Rest parameters

function sumAll(...n: number[]){
    return n.reduce((previewValue, actualVAlue) => previewValue + actualVAlue)
}

const arrayTeste:number[]= [1,2,3,4]

console.log(sumAll(...arrayTeste))
console.log(sumAll(56,564,121321,5))


// 11 - desconstrução de objetos

function showProductDetails({name, price}:{name:string, price: number}):string{
    return `O nome do produto é ${name} e o valor é ${price} `
}

interface Product {
    name: string
    price:number
}

const shirt: Product = {
    name: 'Camisa',
    price: 59.99
}

console.log(showProductDetails(shirt))



