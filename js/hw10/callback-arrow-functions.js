// 1 
console.log("1 завдання");

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

function countWord(array,condition) {
    let count = 0;
    for (const word of array) {
        if (condition(word)) {
            count +=1
        }
    }
    return count;
}
function countNums(array,condition) {
    let count = 0;
    for (const num of array) {
        if (condition(num)) {
            count +=1
        }
    }
    return count;
}
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('Парних чисел:', countNums(numbers, isEven));
console.log('Чисел більше 10:', countNums(numbers, isLarge));
console.log('Коротких слів:', countWord(words, isShort));

// 2
console.log("2 завдання");

function calculate(a,b,operation) {
    return operation(a,b);
}
const add = (a,b) => `${a} + ${b} = ${a + b}`;
const subtract = (a,b) => `${a} - ${b} = ${a - b}`;
const multiply = (a,b) => `${a} x ${b} = ${a * b}`;
const divide = (a,b) => {
    if (b===0) {
        return`Помилка на ${b} ділити не можна`
    }
    return `${a} / ${b} = ${a / b}`
}
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract)); 
console.log(calculate(10, 5, multiply)); 
console.log(calculate(10, 5, divide));   
console.log(calculate(10, 0, divide));   

// 3 
console.log("3 завдання");

function repeatMessage(times,messageCreator) {
    for (let i = 0; i < times; i+=1) {
        messageCreator(i)
        
    }
}

repeatMessage(5,(i) => {
  console.log("Повідомлення" + (i + 1));
});