// 1
console.log("1 завдання");
const userNames = ["ScoobyDooby" , "Maksimus3000" , "Robotic908", "Rolinod" , "BanRop15"];
console.log(userNames.join(" "));

// 2 
console.log("2 завдання");
const cards = ["Карточка 1","Карточка 2","Карточка 3","Карточка 4","Карточка 5"];
console.log(cards);

// 3
console.log("3 завдання");
const findIndex = cards.indexOf("Карточка 3");
cards.splice(findIndex, 1);
console.log(cards);

// 4
console.log("4 завдання");
cards.push("Карточка 6");
console.log(cards);

// 5
console.log("5 завдання")
const cardFindIndex = cards.indexOf("Карточка 4")
cards.splice(cardFindIndex,1,"Нова карточка 4");
console.log(cards);

