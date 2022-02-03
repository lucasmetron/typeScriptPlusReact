// 1 - Type guard

function sum(a: number | string, b: number | string) {
    if (typeof a === 'string' && typeof b === 'string') {
        return parseFloat(a) + parseFloat(b)
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    return " não é possível fazer o calculo, tenten novamente"
}

console.log(sum(5, 20))
console.log(sum('10', '50'))

// 2 - checando se o valor existe

function operations(arr: number[], operation?: string | undefined) {
    if (operation) {
        if (operation === 'sum') {
            let total: number = 0;
            for (let i = 0; i < arr.length; i++) {
                total = total + arr[i]
            }
            console.log('soma', total)
        }
        else if (operation === 'multi') {
            let total: number = 0;
            for (let i = 0; i < arr.length; i++) {
                total !== 0 ? total = total * arr[i] : total = arr[i]
            }
            console.log('multi', total)
        }
    } else {
        console.log('Passe opeção válida')
    }
}

operations([1, 2, 3], 'sum')
operations([2, 2, 3], 'multi')
operations([1, 2, 3])

// 3 - operador instanceof 

class User {
    name
    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

console.log(jhon)
console.log(paul)

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Olá super usuário ${user.name}`)
    } else if (user instanceof User) {
        console.log(`Olá usuário comum ${user.name}`)
    }
}

userGreeting(jhon)
userGreeting(paul)

// 4 - Operador In

class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name;
        if (breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog('Turca')
const bob = new Dog('Bob', 'Pastor Alemão')

function showDogDetails(dog: Dog) {
    if ('breed' in dog) {
        console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`)
    } else {
        console.log(`O cachorro ${dog.name} é um SRD`)
    }
}

showDogDetails(turca)
showDogDetails(bob)

// 5 - Desafio
type Review = number | boolean

function review(stars: Review) {
    if (typeof stars === 'number') {
        if (stars === 1) {
            console.log(`Obrigado por seu feedback de nota ${stars}, o que podemos melhorar?`)
        } else if (stars === 2) {
            console.log(`Obrigado por seu feedback de nota ${stars}, não gostou de algo?`)
        } else if (stars === 3) {
            console.log(`Obrigado por seu feedback de nota ${stars}, iremos melhorar!`)
        } else if (stars === 4) {
            console.log(`Obrigado por seu feedback de nota ${stars}, do que você mais gostou?`)
        } else if (stars === 5) {
            console.log(`Obrigado por seu feedback de nota ${stars}, show!`)
        }

    } else {
        console.log('usuário nao deixou review')
    }

}

review(1)
review(2)
review(3)
review(4)
review(5)
review(false)