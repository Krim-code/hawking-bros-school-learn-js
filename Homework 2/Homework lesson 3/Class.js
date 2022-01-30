class Animals {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHi() {
        console.log(this.name)
    }

}

class Rabbit extends Animals {
    sayHi() {
        console.log(this.name, this.age)
    }
}

let crol = new Rabbit("Кролл", 19)
crol.sayHi();