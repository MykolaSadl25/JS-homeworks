// 1
console.log("1 task");
function logItems(array) {
    for (let i = 0; i < array.length; i+=1) {
        console.log(`${i+1} - ${array[i]}`);
    }
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));

// 2
console.log("2 task");
function calculateEngravingPrice(message,pricePerWord) {
    let price = message.split(" ").length * pricePerWord;
    return price;
}
console.log(calculateEngravingPrice("My name is Mykola and I am 15",20));

//3
console.log("3 task");

let array = ["fine","hi","javascript"];

function findLongestWord(a){
    let max = a[0];
    for(const word of a){
        if (word > max) {
            max = word;
        }
    }
    return max;
}
console.log(findLongestWord(array));


// 4
console.log("4 task");
function formatString(string){
    if (string.length <= 40) {
        return string;
    }
    else {
        const cut = string.slice(0,40)+"..."
       return cut;
        
    }
}
console.log(formatString("Yo, if I could do it, then why can't you? (Why?) Huh, get up and make it work Ain't no way that I'm sitting around, its now or never, Im picking it first "));
console.log(formatString("You can't tell me that I won't make it, knew that I had this gift since birth (I knew)"));
console.log(formatString("Grinding, came out the mud like Roddy, I had nobody, I came from dirt"));

// 5
console.log("5 task");
function checkForSpam(message) {
    if (message.includes("spam") && message.includes("sale")) {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkForSpam("My inbox is full of spam about a huge sale."));
console.log(checkForSpam("The sun set behind the quiet hills."));

// 6
// console.log("6 Task");

// let input;
// const numbers = [];
// let total = 0;

// do {
//     input = prompt("Введіть число");
//     if (input === null) {
//         break;
//     }
//     if (isNaN(input)) {
//         alert("Було введено не число, попробуйте ще раз")
//         continue;
//     }
//     const number = Number(input);
//     numbers.push(number);

// } while (true);

// if (numbers.length > 0) {
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
        
//     }
//     console.log(`Загальна сума чисел дорівнює ${total}`);
    
// }

// 7
console.log("7 task");

const logins = ["nexaro","lufren","zovrix","melqon","trevix","aerlin","folmar","kyrenz","ulvion","draxel_"];
const enterLogin = prompt("Введіть ваш логін");
// logins.push(enterLogin);

function isLoginValid(login) {
    if (login.length >= 4 && login.length <= 16) {
       alert("Логін введено правильно");
       return true;
    }
    else if(login.length < 4){
        alert("Логін закороткий");
        return false;
    }
}
function isLoginUnique(allLogins, login) {
    if (!allLogins.includes(login)) {
        alert("Логін успішно доданий!");
        allLogins.push(login);
        return allLogins;
    }
    else if(allLogins.includes(login)) {
        alert("Логін вже існує");
        return false;
    }
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    alert("Помилка! Логін повинен бути від 4 до 16 символів");
  } else if (!isLoginUnique(allLogins, login)) {
    alert("Такий логін уже використовується!");
  } else {
    allLogins.push(login);
    alert("Логін успішно доданий!");
  }
  return allLogins;
}

console.log(addLogin(logins,enterLogin));

