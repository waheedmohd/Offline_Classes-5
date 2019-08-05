// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Creation of an Array
let array = ['test', 100, true , undefined , null , { name : 'John'} , [10 , 20] ];
console.log(array);

// access the values
console.log(`Value : ${array['1']}`); // 100

/*

shift() -> to remove the first element of an array
unshift() -> to add the first element to an array
pop() -> to remove the last element of an array
push() -> to add the last element to an array
sort() -> to sort the array in ascending order
reverse() -> to reverse the elements of an array
splice() -> to remove the elements from the middle of array
slice() -> to create a new copy of an array
split() -> to split a string & convert to an array
join() -> to join the elements of an array to string
find() -> to find a specific element from an array
filter() -> to filter the array with some condition
forEach() -> to loop an array elements

 */

// shift() -> to remove the first element of an array
console.log(`------------------------ shift() ------------------`);
let technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.shift();
console.log(technologies);

// unshift() -> to add the first element to an array
console.log(`------------------------ unshift() ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.unshift('NODE JS');
console.log(technologies);

// pop() -> to remove the last element of an array
console.log(`------------------------ pop() ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// push() -> to add the last element to an array
console.log(`------------------------ push() ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.push('REACT JS');
console.log(technologies);

// sort() -> to sort the array in ascending order
console.log(`------------------------ sort() ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.sort();
console.log(technologies);

// reverse() -> to reverse the elements of an array
console.log(`------------------------ reverse() ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// Descending Order of array
console.log(`------------------------ Descending Order ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.reverse().sort();
console.log(technologies);

// splice(index) -> to remove all the elements from the given index
console.log(`------------------------ splice(index) ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.splice(1);
console.log(technologies);

// splice(index,no of elements) -> to remove the given no of elements from the given index
console.log(`------------------------ splice(index) ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.splice(0,1);
console.log(technologies);

// splice(index, 1 , replace) -> to replace the elements from the given index
console.log(`------------------------ splice(index) ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
technologies.splice(0,1,'NODE JS');
console.log(technologies);

// join() -> to join the elements of an array to string
console.log(`------------------------ join() ------------------`);
technologies = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'BOOTSTRAP' , 'JQUERY'];
console.log(technologies);
let techString = technologies.join(" - ");
console.log(techString);

// split() -> to split a string & convert to an array
console.log(`------------------------ split() ------------------`);
console.log(techString);
technologies = techString.split(" - ");
console.log(technologies);

// slice() -> to create a new copy of an array
let array1 = [10,20,30,40];
let array2 = array1.slice();
array1.splice(2);
console.log(array2);

// length
console.log(`Length : ${technologies.length}`);

// Looping an array
// Normal for - loop
let colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
let result = '';
for(let i=0 ; i < colors.length ; i++){
    result += `${colors[i]} `;
}
console.log(result);

// for-in Loop ES5
colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
result = '';
for(let index in colors){
    result += `${colors[index]} `;
}
console.log(result);

// for - of loop ES6
colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
result = '';
for(let color of colors){
    result += `${color} `;
}
console.log(result);

// forEach function ES5
colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
result = '';
colors.forEach(function(color) {
    result += `${color} `;
});
console.log(result);

// forEach with Arrow function  ES6
colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
result = '';
colors.forEach(color => result += `${color} `);
console.log(result);

// Filter Function
let employees = [
    {
        id : 100,
        name : 'John',
        age : 35,
        designation : 'Manager',
        active : true
    },
    {
        id : 101,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : false
    },
    {
        id : 102,
        name : 'Laura',
        age : 23,
        designation : 'Software Engineer',
        active : true
    },
    {
        id : 103,
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager',
        active : false
    },
    {
        id : 104,
        name : 'David',
        age : 60,
        designation : 'CTO',
        active : true
    }
];

console.log(employees);

// junior Employees Old Way
let juniorEmployees = () => {
    let juniorEmployees = [];
    for(let employee of employees){
        if(employee.age <= 30){
            juniorEmployees.push(employee);
        }
    }
    return juniorEmployees;
};
console.log(juniorEmployees());

// New Way using filter()
let juniorEmployeesNew = employees.filter((employee) => {
    return employee.age <= 30;
});
console.log(juniorEmployeesNew);


// Senior Employees
let seniorEmployees = employees.filter((employee) => {
    return employee.age > 30;
});
console.log(seniorEmployees);


// Active Employees
let activeEmployees = employees.filter((employee)  => {
    return employee.active;
});
console.log(activeEmployees);

// Inactive Employees
let inActiveEmployees = employees.filter(employee => !employee.active);
console.log(inActiveEmployees);