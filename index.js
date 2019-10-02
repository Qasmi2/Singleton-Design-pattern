//  implementation of Singleton pattern 

class singletonPattren{

    // constructure 
    constructor(name=""){

        if(!!singletonPattren.instance){

            return singletonPattren.instance;

        }
        
        singletonPattren.instance = this;

        this.name = name;
        return this;
    }

    
    getName(){

        return this.name;

    }

}

// Inhertence 

class Extending extends singletonPattren{

    shoutName() {
        return this.name.toUpperCase();
    }

}



// call the singletonPattren Class

const instance1 = new singletonPattren("first instance ");
const instance2 = new singletonPattren("second instance");
const instance3 = new singletonPattren("third instance");

// print 

console.log(`instance 1 `,instance1.getName()); // instance 1  first instance 
console.log(`instance 2 `,instance2.getName()); // instance 2  first instance 
console.log(`instance 3 `,instance3.getName()); // instance 3  first instance 


// call Extending Class 
// The only way to extend a singleton class is to do it before any instance is initiated. 

const A = new Extending();
console.log("getName" in A); // true 
console.log("shoutName" in A); // false 