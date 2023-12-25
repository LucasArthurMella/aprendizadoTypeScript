

interface AddFn {
    (a: number, b:number): number
}

let add: AddFn;

add = (n1:number, n2:number) => {
   return n1 + n2; 
}

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named{
    greet(phase: string): void;
}

class Person implements Greetable {
    age = 30;
    name?: string;
    constructor(n?:string){
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string){
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }else{
            console.log("hi");
        }
    }}

    
let user1: Greetable;
//because Person implements Greetable, it's ok to instantiate Person in a variable that has Greetable type
user1 = new Person("Max");

user1 = {
    name: "Max",
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet("Hi there - I am");
console.log(user1);