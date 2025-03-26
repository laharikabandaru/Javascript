let bmw ={
    wheels : 4,
    steer(){
        console.log("every car has steering ");
    }
};
let sonita = {
    gears : 3
    
};
let maruthisuzuki ={
    __proto__ : sonita
}
sonita.__proto__ = bmw;
console.log(sonita.wheels);
sonita.steer();
maruthisuzuki.steer();
console.log(maruthisuzuki.hasOwnProperty("gears"));