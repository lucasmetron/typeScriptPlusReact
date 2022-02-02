// 1 - arrays 
var numbers = [1, 2, 3];
numbers.push(5);
// numbers.push('5') não pode
var nomes = ['lucas', 'lais'];
nomes.push('5');
// nomes.push(5) não pode
// 2 - Outra sintaxe array
var nums = [100, 200];
nums.push(300);
console.log(nums);
//3 - Any
var arr1 = [1, 'teste', true, [], { nome: 'Lucas' }];
console.log(arr1);
//4 - Tipo de parametro de funções
function soma(a, b) {
    console.log(a + b);
}
soma(10, 5);
//5 - tipo de retorno
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting('Lucas'));
// 6 função anonima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary)) não permite por que o parsefloat transforma string em numero
    // console.log(sallary)
}, 2000);
// 7 tipos de objetos
//função vai receber objeto que já possui tipo, obrigatoriamente tera que ter x e y com tipo number
function passCordinates(cord) {
    console.log("X cordinates: " + cord.x);
    console.log("Y cordinates: " + cord.y);
}
var objCord = {
    x: 5,
    y: 84.2
};
passCordinates(objCord);
//função está esperando uma array de numero como parametro 
function passCordinates2(cord) {
    console.log(cord);
}
passCordinates2([5, 6, 9, 7]);
//aqui estamos tipando um objeto, porem existe maneiras mais faceis que iremos ver mais pra frente
var pessoaObj = {
    nome: 'Lucas',
    surname: 'rosa'
};
// 8 propreidades opcionais 
//passando ? na frente do parametro 'c', ele torna opcional. No caso abaixo, o typescript vai exigir apenas 2 parametros, o terceiro fica opcional 
function showNumber(a, b, c) {
    console.log('a: ' + a);
    console.log('b: ' + b);
    if (c) {
        console.log('c: ' + c);
    }
}
showNumber(1, 2, 3);
showNumber(1, 2);
//9 validando argumento opacional 
//Condicional que verifica se o tipo é undefined. Se o primeiro return atender, não vai para o segundo
function advencedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem? ");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem? ");
}
console.log(advencedGreeting('Lucas', 'Rosa'));
console.log(advencedGreeting('Lais'));
//10 Union Type
function showBalance(value) {
    console.log('value é ' + value);
}
showBalance(5);
showBalance('50');
// showBalance(false) nao aceita boolean
//forma antiga
var array = [5065, '45621', 'nome', 51, 'lucas'];
//nova forma
var array2 = [4654561, 'asdasd'];
//11 avançando em unio types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usu\u00E1rio nao autorizado";
    }
    return "Usu\u00E1rio do tipo: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole('admin'));
//12 - types alias
//antes
function showID1(id) {
    console.log("O id \u00E9: ".concat(id));
}
showID1(5);
showID1('500');
function showID2(id) {
    console.log("O id \u00E9: ".concat(id));
}
showID2(5);
showID2('500');
//cords precisa respeitar o tipo Point possuindo todos os tipos
var cords = {
    x: 62,
    y: 5642,
    z: 5312
};
function showCordnates(obj) {
    console.log("Cord X ".concat(obj.x));
    console.log("Cord Y ".concat(obj.y));
    console.log("Cord Z ".concat(obj.z));
}
showCordnates(cords);
var somePerson = {
    name: 'Lucas',
    age: 30
};
var somePersonb = {
    name: 'Lucas',
    age: 30,
    weight: 78.5
};
// não permite colocar o type abaixo dando erro de identificador duplicado
// type PersonC ={
//     age:number
// }
// 15 Literal types
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9 ".concat(direction));
}
showDirection('left');
// showDirection('top') não é permitido, por que podemos passar apenas left ou right
// 16 - non null assetion operators
var p = document.getElementById('paragrafo');
console.log(p.innerHTML);
// 17 - Bigint
var n;
// n = 5 não vai aceitar por que 5 é um number normal
n = 5000n;
// 18 - Symbol
var nameA = Symbol('a');
var nameB = Symbol('b');
console.log(nameA == nameB);
console.log(nameA === nameB);
