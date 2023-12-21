// const userName = "Max";
// // userName = "Maximiliam";
// let age = 30;

// age = 29;

// function add(a:number, b:number){
//     let result;
//     result = a +b;
//     return result;
// }

// if(age > 20){
//     let isOld = true;
// }

// if(age < 20){
//     var isYoung = true;
// }

// console.log(isOld);

// console.log(result);

// console.log(isYoung);

// const add = (a:number, b:number = 1) => a+b;

// console.log(add(2,5));

// const printOutput: (output: string | number) => void =  output => console.log(output);

// const button = document.querySelector("button");

// if(button){
//     button.addEventListener("click", event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
    firstName: "Max",
    age: 30
}

const copiedPerson = {...person};


// const add = (...numbers: [number, number, number]) => {
//     return numbers.reduce((curRes, curValue) => {
//         return curRes + curValue;
//     }, 0)

// };

const add = (...numbers: number[]) => {
    return numbers.reduce((curRes, curValue) => {
        return curRes + curValue;
    }, 0)

};

const addedNumbers = add(5,10,2,3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName: userName, age } = person;

console.log(userName, age, person);