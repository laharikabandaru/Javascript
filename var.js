// variables can be redeclared and reassigned in the function-scoped or globally-scoped, but not block-scoped. 
var a= 10;
a=20;
console.log(a);

// let can be reassigned but not redeclared in the block scope
let x=10;
if (true){
    let y=20;
    console.log(x);
    console.log(y);
}

// const is a block scope and it cant be redeclared and reassigned 
const f=3;
console.log(f);

// but it can be possible with objects and array
const person = {
    name: 'Mayank',
    age: 21
};
console.log(person.name);  
person.name = 'Love';
console.log(person.name);  




