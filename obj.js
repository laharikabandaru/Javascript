// Objects Example

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    company : "BMW"
  };
  
// Creating and Accessing objects 
  console.log(car.brand);  
  console.log(car.model);  
  console.log(car.year);   
  console.log(car.company);
//   Adding and deleting properties
  delete car.company;
  console.log(car);

// Checking for a Property
function hasProperty(obj, key) {
    return key in obj;
  }

 console.log(hasProperty(car,"brand"));
 console.log(hasProperty(car, "company"));
 
 //loop through objects
 for (let key in car){
    console.log(` ${key} : ${car[key]}`);
 }

//  counting properties 
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
      count++;
    }
    return count;
  }
console.log(countProperties(car));  

// object with methods
let calculater = {
    num1 :10,
    num2:5,
    add(){
        return this.num1+this.num2;
    },
    substract(){
        return this.num1-this.num2;
    },
    multiply(){
        return this.num1*this.num2;
    }
};
console.log(calculater.add());
console.log(calculater.substract());
console.log(calculater.multiply());

// cloning the object
function cloneObject(obj) {
    let clone = {};
    for (let key in obj) {
      clone[key] = obj[key];
    }
    return clone;
  }
let carClone=cloneObject(car);
console.log(carClone);

//Merging Objects
  let car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
  };
  let car2 = {
    model: "Coro",
    year: 2021
  };
  
  let mergedCar = Object.assign({}, car1, car2);
  
  console.log(mergedCar);  

  // object with default values
  function createCars(name, age, role = "user") {
    return {
      name: name,
      age: age,
      role: role
    };
  }
  
  let newUser = createCars("Tom", 30);
  console.log(newUser);  
  
  // nested objects 
  let company = {
    name: "Tech Corp",
    employees: [
      { name: "Alice", position: "Developer" },
      { name: "Bob", position: "Designer" }
    ]
  };
  
  console.log(company.employees[0].name);   
  console.log(company.employees[1].position);  
  console.log(company.employees[0].position);
  console.log(company.name)
  console.log(company.employees[1].name);

//   Objects to arrays
let Prices = {
    apple: 2,
    banana: 1,
    cherry: 3
  };
  
  function gKeys(obj) {
    return Object.keys(obj);
  }
  
  function gValues(obj) {
    return Object.values(obj);
  }
  
  console.log(gKeys(Prices));
  console.log(gValues(Prices));
  
//   Sorting object properties
let salaries = {
    John: 200,
    Ann: 150,
    Pete: 300
  };
  
  function sortSalaries(obj) {
    return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  }
  
  console.log(sortSalaries(salaries));  

  // Destructing an object
  let { John, Ann, Pete} = salaries
 console.log(John);
 console.log(Ann);
 console.log(Pete);

//  Nested Object Destructing
let person = {
  name: "Sadvi",
  age: 32,
  address: {
    street: "JNTU",
    city: "hyderabad",
    zipCode: 534298
  }
};

let { address: { street, city, zipCode } } = person;

console.log(street);  
console.log(city);    
console.log(zipCode); 

//  merge using spread syntax
let toy1= { name: "Alice", age: 30 };
let toy2 = { city: "Paris", country: "France" };
let mergedtoys={... toy1, ... toy2};
console.log(mergedtoys)

//Freezing an object
Object.freeze(toy1);
toy1.name="sadvi";
console.log(toy1);

// Object entries
let toy1Entries = Object.entries(toy1);
console.log(toy1Entries);

// modifying object values 
let total = {
  marks1: 35,
  marks2: 60,
  marks3: 77,
};

function updateMarks(obj, increment) {
  for (let key in obj) {
    obj[key] += increment;
  }
}

updateMarks(total, 3);
console.log(total); 

// object method with this
let square  = {
  side : 10,
  area (){
    return this.side * this.side;
  }
}
console.log(square.area());

// max property value
let products = {
  "laptop": 1000,
  "phone": 500,
  "tablet": 700
};

function findMaxPrice(obj) {
  let maxPrice = 0;
  let maxProduct = "";

  for (let key in obj) {
    if (obj[key] > maxPrice) {
      maxPrice = obj[key];
      maxProduct = key;
    }
  }

  return maxProduct;
}

console.log(findMaxPrice(products));  