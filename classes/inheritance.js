class Car {

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log("Engine started of " + this.name);
    }
    stopEngine(){
        console.log("Engine stopped of " + this.name);
    }
}

// extend is the key word that we use for inheritance;
class Toyota extends Car {

    topSpeed(speed){
     console.log(`TopSpeed for ${this.name} is ${speed} km/hr`);
    }
}

let myCar = new Toyota();

myCar.setName("Camry");
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200)