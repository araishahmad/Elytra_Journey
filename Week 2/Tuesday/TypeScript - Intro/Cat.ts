import Animal from './Animal';

class Cat extends Animal{
    sound: string;

    constructor (name: string, breed: string, sound: string){
        super(name, breed);
        this.sound = sound;
    }

    intro(){
        return super.intro() + ` and says ${this.sound}.`
    }
}

export default Cat;