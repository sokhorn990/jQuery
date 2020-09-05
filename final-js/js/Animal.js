export default class Animal {
    setName(name) {
        this.mname = name;
    }
    getName(){
        console.log(this.mname);
    }
    walk(){
        console.log("walk...");
    }
    run(){
        console.log("Run...");
    }
}