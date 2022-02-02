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
    console.log(sallary);
}, 2000);
