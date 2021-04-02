
/*
This is TypeScript programs by MacOS
*/

let aa = 9;

console.log("liuminghao age is " + aa);

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

console.log(greeter.greeting);


function add(x,y) {
    return x+y+3;

}

let myAdd = function(x,y) 
{
    retunr x*y;
    //return x+y;
}


