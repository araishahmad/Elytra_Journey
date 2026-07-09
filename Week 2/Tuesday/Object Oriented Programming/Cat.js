const Animal = require("./Animal");

class Cat extends Animal{
    constructor (name, breed, sound){
        super(name, breed);
        this.sound = sound;
    }

    intro(){
        return super.intro() + ` and says ${this.sound}.`
    }
}

module.exports = Cat;