// function Logger(constructor: Function){
//     console.log("Logging...");
//     console.log(constructor);
// }


function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string){
    return function(originalConstructor: any){
        return class extends originalConstructor {
            constructor() {
                super();
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId);
                const p = new originalConstructor();
                if(hookEl){
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = p.name;
                } 
            }
        }
    }
}

@Logger("Logging - Person")
// @WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
    name = "Max";
    constructor(){
        console.log("Creating person object...");
    }
}

const pers = new Person();

console.log(pers);

// ---

//property
function Log(target:any, propertyName: string | Symbol){
    console.log("Property decorator!");
    console.log(target, propertyName);
}

//acessory
function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log("Acessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

//function
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

//parameter
function Log4(target: any, name: string | Symbol, position: number){
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
        if(val > 0){
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive!");
        }
    }

    constructor(t: string, p:number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax:number){
        return this._price * (1 + tax);
    }

}