class Animal {
    name: string;
    breed: string;

    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }

    intro() {
        return `My name is ${this.name} and I'm from ${this.breed} breed`;
    }
}

export default Animal;