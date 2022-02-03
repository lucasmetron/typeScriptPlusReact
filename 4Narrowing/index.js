// 1 - Type guard
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return parseFloat(a) + parseFloat(b);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return " não é possível fazer o calculo, tenten novamente";
}
console.log(sum(5, 20));
console.log(sum('10', '50'));
// 2 - checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            var total = 0;
            for (var i = 0; i < arr.length; i++) {
                total = total + arr[i];
            }
            console.log('soma', total);
        }
        else if (operation === 'multi') {
            var total = 0;
            for (var i = 0; i < arr.length; i++) {
                total !== 0 ? total = total * arr[i] : total = arr[i];
            }
            console.log('multi', total);
        }
    }
    else {
        console.log('Passe opeção válida');
    }
}
operations([1, 2, 3], 'sum');
operations([2, 2, 3], 'multi');
operations([1, 2, 3]);
// 3 - operador instanceof 
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var jhon = new User("Jhon");
var paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log("Ol\u00E1 super usu\u00E1rio ".concat(user.name));
    }
    else if (user instanceof User) {
        console.log("Ol\u00E1 usu\u00E1rio comum ".concat(user.name));
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - Operador In
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog('Turca');
var bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro ".concat(dog.name, " \u00E9 da ra\u00E7a ").concat(dog.breed));
    }
    else {
        console.log("O cachorro ".concat(dog.name, " \u00E9 um SRD"));
    }
}
showDogDetails(turca);
showDogDetails(bob);
// 5 - Desafio
function review(stars) {
    if (typeof stars === 'number') {
        if (stars === 1) {
            console.log("Obrigado por seu feedback de nota ".concat(stars, ", o que podemos melhorar?"));
        }
        else if (stars === 2) {
            console.log("Obrigado por seu feedback de nota ".concat(stars, ", n\u00E3o gostou de algo?"));
        }
        else if (stars === 3) {
            console.log("Obrigado por seu feedback de nota ".concat(stars, ", iremos melhorar!"));
        }
        else if (stars === 4) {
            console.log("Obrigado por seu feedback de nota ".concat(stars, ", do que voc\u00EA mais gostou?"));
        }
        else if (stars === 5) {
            console.log("Obrigado por seu feedback de nota ".concat(stars, ", show!"));
        }
    }
    else {
        console.log('usuário nao deixou review');
    }
}
review(1);
review(2);
review(3);
review(4);
review(5);
review(false);
