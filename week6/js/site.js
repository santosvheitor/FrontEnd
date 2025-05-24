const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 15 },
    { name: "Eve", age: 45 }
];

//console.log(people);



const names = people.map(person => person.name);
console.log({names}); // ["Alice", "Bob", "Charlie", "David", "Eve"]


const ages = people.map(person => person.age);
console.log({ages});  // [22, 17, 30, 15, 45]

const adults = people.filter(person => person.age >= 18);
console.log({adults}); // [{ name: "Alice", age: 22 }, { name: "Charlie", age: 30 }, { name: "Eve", age: 45 }]

const children = people.filter(person => person.age < 18);
console.log({children});    // [{ name: "Bob", age: 17 }, { name: "David", age: 15 }]

const totalAge = people.reduce((sum, person) => sum + person.age, 0);
console.log({totalAge}); // 22 + 17 + 30 + 15 + 45 = 129

const adults2 = people.filter(p => p.age >= 18);
const totalAdultAge = adults2.reduce((sum, p) => sum + p.age, 0);
const averageAdultAge = totalAdultAge / adults2.length;
console.log({averageAdultAge}); // 22 + 30 + 45 = 97 / 3 = 32.33




