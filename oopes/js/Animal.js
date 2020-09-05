export default class Animal {
    
    setName(firstname) {
        this.mfirstname = firstname;
    }
    getName() {
        console.log(this.mfirstname);
    }
    walk() {
        console.log("This dog is walk");
    }
    run() {
        console.log("This dog is running");
    }

}

// const kk=new Animal();
// kk.setName("Sokhorn.nhor");
// kk.getName();