// 1
console.log("1 Завдання");
let numbers = [20, 50, 5,];
numbers[1] = 10;
console.log(numbers);

// 2
console.log("2 Завдання");
let texts = ["My", "name", "is"];
texts[3] = "Mykola";
console.log(texts);

// 3
console.log("3 Завдання");
let num = [1, 5, 10, 15, 20];
let sum = 0;
for(let i = 0; i < num.length; i += 1){
    sum += num[i];
}
console.log(sum);

// 4
console.log("4 Завдання");
let moreNumbers = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < moreNumbers.length; i += 1){
    console.log(moreNumbers[i]);
}

// 5
console.log("5 Завдання");
const strings = ["Кіт", "Червоний", "Дерево", "Хліб", "Чай"];
for(let i = 0; i < strings.length; i += 1){
    if (strings[i].length > 5) {
        continue;
    }
    console.log(strings[i]);
}

// 6

console.log("6 завдання");
const addNumbers = [12,52,4632,448,1,1.1,5.022];
let result = 0;
for (let i = 0; i < addNumbers.length; i+= 1) {
    result += addNumbers[i];
}
console.log(result);

// 7
console.log("7 Завдання");
const someNumbers = [20,11,10,53,13,6,8,3,1,40];
for(let i = 0; i < someNumbers.length; i += 1){
    if (someNumbers[i] % 2 !== 0) {
        continue;
    }
    console.log(someNumbers[i]);
    
}
