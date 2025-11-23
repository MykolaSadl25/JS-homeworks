// 1
console.log("1 Task");

const user1 = {
    hobby:"Hobby football",
    premium:true,
}
user1.mood = "happy";
user1.hobby = 'skydiving';
user1.premium = false;
const key = Object.keys(user1);
for (const element of key) {
    console.log(element,user1[element]);
    
}

// 2 
console.log("2 Task");

const user = {
    name:"Mykola",
    age:14,
    isStudent:true,

}
function countProps(obj){
let key = Object.keys(obj);
return key.length;
}

countProps(user);

// 3 
console.log("3 Task");

const people ={
    yaroslav:20,
    mykola:50,
    vlad:40,
    mariia:0,
}

function findBestEmployee(employees) {
    let best = "";
    let maxPurpose = 0;
    const entries = Object.entries(employees);
    for (const element of entries) {
     if (element[1] > maxPurpose) {
        maxPurpose = element[1];
        best = element[0];
     }   
    }
    return `${best}:${maxPurpose}`
}

console.log(findBestEmployee(people));

// 4 
console.log("4 Task");

const workers = {
    oleksandr: 12000,
    lucas: 10000,
    vlad: 13000,
    maksim: 20000,
    yaroslav: 11500,
}

function countTotalSalary(employees) {
    let total = 0;
    const keys = Object.keys(employees)
    const values = Object.values(employees);
    for (const el of values) {
        total += el;
    }
    return total;
}
console.log(countTotalSalary(workers));

// 5
console.log("5 Task");

const products = [
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "Headphones", price: 80, category: "electronics" },
  { name: "Chair", price: 150, category: "furniture" },
  { name: "Mug", price: 12, category: "kitchen" }
];

function getAllPropValues(array,prop) {
    const propValue = [];
    for (const i of array) {
        if (i[prop]) {
            propValue.push(i[prop])
        }
    }
    return propValue;
}
console.log(getAllPropValues(products,"name"));
console.log(getAllPropValues(products,"price"));
console.log(getAllPropValues(products,"category"));

// 6 
console.log("6 Task");
const store = [
  { name: "Laptop", price: 1200, quantity: 3 },
  { name: "Headphones", price: 80, quantity: 10 },
  { name: "Mouse", price: 25, quantity: 50 },
  { name: "Keyboard", price: 45, quantity: 20 },
  { name: "Chair", price: 150, quantity: 5 },
  { name: "Mug", price: 12, quantity: 100 }
];

function calculateTotalPrice(allProducts, productName) {
    for (const el of allProducts) {
        if (el.name === productName) {
            let fullPrice = el.price * el.quantity;
            return fullPrice;
        }
    }
}
console.log(calculateTotalPrice(store,"Laptop"));
console.log(calculateTotalPrice(store,"Headphones"));
console.log(calculateTotalPrice(store,"Mouse"));
console.log(calculateTotalPrice(store,"Keyboard"));
console.log(calculateTotalPrice(store,"Chair"));
console.log(calculateTotalPrice(store,"Mug"));