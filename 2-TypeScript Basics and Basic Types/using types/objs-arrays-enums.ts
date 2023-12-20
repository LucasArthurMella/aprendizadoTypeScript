// const person: {
//     name: string;
//     age: number;
// } = {

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Lucas",
//     age: 21,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, '']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR}


const person = {
    name: "Lucas",
    age: 21,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [10,"admin"];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); 
}

if(person.role === Role.AUTHOR){
    console.log("is author");
}