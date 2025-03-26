// global scope
var a="this is about global variable"
function test(){
    console.log(a);
}
test();
console.log(a);

// function scope
function scope(){
    var b="this is about function scope";
    console.log(b);
}
scope();

// Blocked scope
if (true){
    let c="this is about blocked scope";
    console.log(c);
}
