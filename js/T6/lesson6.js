// 1
console.log("1 завдання");
let number = 0;
while(number < 10){
    number += 1;
    console.log(number);
}
// 2
console.log("2 завдання");
for(let i = 2; i <= 20; i += 1){
    if (i%2 === 0) {
        console.log(i);
    }
}

// 3
console.log("3 завдання");
for(let i = 0; i <= 10; i += 1){
    console.log(`7 x ${i} = ${7 * i}`);
}

// 4
console.log("4 завдання");
const n = 10;
for(let i = 0; i <= 18; i += 1){
    if (i >= n) {
        break;
    }
    console.log(i);
}

// 5
console.log("5 завдання");
let num = 1;
while(num < 20){
    num += 1;
    if(num%3 === 0){
        console.log(num);
        continue;
    }
}