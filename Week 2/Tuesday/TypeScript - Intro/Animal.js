class Animal {
    name;
    breed;
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    intro() {
        return `My name is ${this.name} and I'm from ${this.breed} breed`;
    }
}
export default Animal;
