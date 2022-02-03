// 1 - função que nao retorna nada VOID
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function withoutReturn() {
    console.log('Essa função nao retorna nada');
    // return 5 se tentar retornar qualquer coisa, o TS vai dar erro
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return "Ol\u00E1, ".concat(name);
}
function preGreeting(f, userName) {
    console.log('carregando callback');
    return f(userName);
}
console.log(preGreeting(greeting, 'Lucas'));
console.log(preGreeting(greeting, 'Laís'));
// 3 - generic function 
//<T> ou <U> é o padrão para o tipo de generic function, perceba que queremos qualquer tipo de dados desde que seja uma array e no retorno na função segue igual
function firstElement(arr) {
    return arr[0];
}
//aqui tambem usamos o genric function para definir objetos que podem ter qualquer tipo de propriedade dentro dele
function mergeObject(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
//aqui não importa quantas propriedades possuem dentro do objeto ou tipo e etc
console.log(mergeObject({ name: 'Lucas', age: '25' }, { job: 'Developer', where: 'stefanini' }));
console.log(mergeObject({ live: 'taguatinga' }, { cep: 75321, ap: 312 }));
// 4 - Constraint em generic function
//Aqui estamos limitando o generic a ser number ou string
function biggestNumber(a, b) {
    var biggestNumber;
    //esse +a e +b faz conversão direta de string pra number caso o tipo seja string 
    if (+a > +b) {
        biggestNumber = a;
    }
    else {
        biggestNumber = b;
    }
    return biggestNumber;
}
console.log(biggestNumber(5, 10));
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
function mergeArrays(array1, array2) {
    return __spreadArray(__spreadArray([], array1, true), array2, true);
}
//Isso evita fazer vários generics 
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ['teste', 'testando']));
// 6 - Parametros opcionais 
function modernGreeting(name, greeting) {
    if (greeting) {
        return "Ol\u00E1 ".concat(greeting, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name, ", tudo bem?");
}
console.log(modernGreeting('Lucas', 'Sr.'));
console.log(modernGreeting('Lais'));
// 7 - parametro default 
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
//caso não chegue o valor de m, será o valor default 10
console.log(somaDefault(10));
console.log(somaDefault(15, 15));
// 8 - tipo unknown 
//alguns resultados mais simples irão passar sem precisar fazer a validação do tipo, porém resultados e manipulações mais complexas irão dar erro
function doSomething(x) {
    //dessa forma pode por que é algo simples
    console.log(x);
    //dessa forma vai dar erro por que é mais complexo
    // console.log(x[0])
}
doSomething([1, 2, 3]);
//forma ideal 
function doSomething2(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('é um numero');
    }
    //e por ai vai 
}
doSomething2([1, 2, 3]);
doSomething2(5);
// 9 - tipo never 
// o void faz coisas no sistema mas não retorna nada, ja o never ele é utilizado para tratamentos de erros onde o sistema vai parar
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage('erro de requisição')
// 10 - Rest parameters
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (previewValue, actualVAlue) { return previewValue + actualVAlue; });
}
var arrayTeste = [1, 2, 3, 4];
console.log(sumAll.apply(void 0, arrayTeste));
console.log(sumAll(56, 564, 121321, 5));
// 11 - desconstrução de objetos
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto \u00E9 ".concat(name, " e o valor \u00E9 ").concat(price, " ");
}
var shirt = {
    name: 'Camisa',
    price: 59.99
};
console.log(showProductDetails(shirt));
