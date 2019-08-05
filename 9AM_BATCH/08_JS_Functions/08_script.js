// Declare a Function
function printNumbers(startNumber , endNumber , increNumber) {
    let result = '';
    for(let i = startNumber; i<= endNumber; i+= increNumber){
        result += `${i} `;
    }
    console.log(result);
}
// Execute a function
printNumbers(10 , 100 , 5);
printNumbers(100 , 1000 , 100);

// Function without Arguments
function greet() {
    console.log('Welcome to JS functions');
}
greet();

// Function with arguments
function greetArgs(name,age) {
    console.log(`Hello ${name} You are ${age} Years of Old!`);
}
greetArgs('John',40);

// Function with Return type
function addition(a , b) {
    let sum = a + b;
    return sum;
}
let result = addition(10,20);
console.log(result);

// Function Expression
let sum = function(a , b) {
    let add = 20 * (a + b);
    return add;
};
result = sum(10,20);
console.log(result);

// Object as a Argument (cond.. Monday)
let student1 = {
    name : 'Mahesh',
    age : 23,
    course : 'Engineering',
    college : 'IIT Mumbai'
};

let printStudent = function(student) {
    console.log(`Name : ${student.name}
                 Age : ${student.age}
                 Course : ${student.course}
                 College : ${student.college}`);
};
printStudent(student1);
printStudent({name : 'Rajan',
    age : 22,
    course : 'Medical',
    college : 'Osmania Medical College'});

// Array as arguments
let colors = ['white' , 'black' , 'orange' , 'purple' , 'yellow'];

let printArray = function(array) {
    let result = '';
    for(let index in array){
        result += `${index} => ${array[index]} \n`;
    }
    console.log(result);
};
printArray(colors);

let technologies = ['html' , 'css' , 'javascript' , 'JQuery'];
printArray(technologies);

// Function inside an Object this
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// Nested function
let outerFn = function() {
   console.log('Iam from Outer Function');
   let innerFn = function() {
     console.log('Iam from Inner Function');
   };
   innerFn();
};
outerFn();

// Arrow Function ES6
let calculate = (a , b) => {
    let result = a + b;
    return result;
};
console.log(calculate(10,20));

// Chicken Curry with functions

let glassBowl = (rawChicken,masala) => {
    // mixing logic
    let marinatedChicken = `Mixing (${rawChicken} with ${masala})`;
    return marinatedChicken;
};

let cookingBowl = (marinatedChicken,water) => {
    // cooking logic
    let cookedChicken = `Cooking (${marinatedChicken} with ${water})`;
    return cookedChicken;
};

let eatingPlate = (cookedChicken,rice) => {
    // Eating Logic
    console.log(`Eating (${cookedChicken} with ${rice})`);
};

let rawChicken = '2kg Chicken';
let masala = 'Pepper + Garlic + Salt';
let marinatedChicken = glassBowl(rawChicken,masala);
let water = '1ltr Water';
let cookedChicken = cookingBowl(marinatedChicken,water);
let rice = '1kg rice';
eatingPlate(cookedChicken,rice);