// 1
console.log("1 Task");

const user1 = {
    hobby:"Hobby Horsing",
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
console.log(key);
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

// 6 
console.log("6 Task");

const arr = [
    {milk: 80}
]