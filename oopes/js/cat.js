import Animal from "./Animal.js";
export class Cat extends Animal {
    cry(){
        console.log("Do not cry ...")
    }
    jump(){
        console.log("Jump please")
    }
}
// const catt =new Cat();
// catt.cry();