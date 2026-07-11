class BankAccount {
    // In JS, # is used to make variables private.
    // Used for encapsulation 
    #name: string;
    #id: number;

    constructor(name: string, id: number) {
        this.#name = name;
        this.#id = id;
    }

    welcome() {
        return `Welcome Mr. ${this.#name} having id ${this.#id}`;
    }

    get cName() {
        return this.#name;
    }

    set cName(name) {
        this.#name = name;
    }

    get cId() {
        return this.#id;
    }

    set cId(id) {
        if (id < 0) {
            throw new Error('Id can not be negative');
        }
        this.#id = id;
    }
}

export default BankAccount;