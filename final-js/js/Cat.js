import Animal from "./Animal.js";

export class Cat extends Animal{
    setName(name) {
        this.mName = name;
    }
    getName() {
        console.log(this.mName);
    }
    cry(){
        console.log("cry...!!")
    }
}