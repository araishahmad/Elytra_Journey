import Animal from './Animal';
class Cat extends Animal {
    sound;
    constructor(name, breed, sound) {
        super(name, breed);
        this.sound = sound;
    }
    intro() {
        return super.intro() + ` and says ${this.sound}.`;
    }
}
export default Cat;
