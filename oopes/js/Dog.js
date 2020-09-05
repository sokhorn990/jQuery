import Animal from "./Animal.js";
export class Dog extends Animal {
    //Brhavior
    bite() {
        console.log("bite you...");
    }
    barck() {
        console.log("Bark you...");
    }
}

// const dog = new Dog();
// dog.run();
// dog.bite();
// dog.getName();

