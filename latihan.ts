let message: string = 'Hello World';
console.log(message);
let halo: number = 1;
console.log(halo);

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};
console.log(user);

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const adi: User = new UserAccount("Murphy", 1);