import Animal from "./Animal.js";

export class Dog extends Animal {
    setName(name) {
        this.mName = name;
    }
    getName() {
        console.log(this.mName);
    }
    puch(){
        console.log("puch...!!")
    }
}