class Animal {
    constructor(){
        this.age = 2;
    }
    name(){
        return "Animal"
    }
    say(){
        return this.name;
    }
}

class Dog extends Animal {
    name(){
        return "Dog"
    } 
    test = "test"
}

let d = new Dog();
console.log(d.say());
console.log(d instanceof Animal);
console.log(Dog.prototype.constructor);
console.log(d.test)
console.log(d.age)