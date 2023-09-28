class Animal {

    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(this.name + " eats food");
    }
}

class Alligator extends Animal {

    eats(){
        super.eats();
        console.log(this.name + " eats fish");
    }
}

let dog = new Animal("Brutus");
dog.eats();

let murphy = new Alligator("Murphy");
murphy.eats();