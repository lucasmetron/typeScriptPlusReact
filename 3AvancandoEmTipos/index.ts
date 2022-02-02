
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
    console.log(sallary)
},2000)