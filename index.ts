type User = {
    name: string;
    age: number;
}

const peshoUser = {
    name: "Pesho",
    age: 21,
} as User;

peshoUser.age = 25;

console.log(peshoUser.age);

