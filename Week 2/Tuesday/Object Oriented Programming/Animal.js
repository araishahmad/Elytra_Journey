class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    meow() {
        return `My name is ${this.name} and I'm from ${this.breed} breed`;
    }
}

module.exports = Animal;