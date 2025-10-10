// 1

const chooseDrink = prompt("Виберіть напій:").toLowerCase().trim();
switch (chooseDrink) {
    case "кава":
        console.log("Ви обрали каву");
        break;
    case "чай":
        console.log("Ви обрали чай");
        break;
    case "сік":
        console.log("Ви обрали сік");
        break;
    default:
        console.log("Ви не обрали правильний напій");
        break;
}

// 2

const day = prompt("Введіть день тиждня").toLowerCase().trim();
switch (day) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    console.log("Це робочий день");
    break;
  case "субота":
  case "неділя":
    console.log("Це вихідний");
    break;
  default:  
    console.log("Неправильно введений день");
    break;
}

// 3

const month = Number(prompt("Введіть номер місяця"));
switch (month) {
    case 12:
    case 1:
    case 2:
    console.log("Ви обрали зиму❄️");
       break;
    case 3:
    case 4:
    case 5:
    console.log("Ви обрали весну🌷");
       break;
    case 6:
    case 7:
    case 8:
    console.log("Ви обрали літо☀️");
       break;
    case 9:
    case 10:
    case 11:
    console.log("Ви обрали осінь🍂");
       break;
    default:
        console.log("Ви ввели неправильний номер місяця");
        break;
}

// 4

const color = prompt("Виберіть колір").trim().toLowerCase();
switch (color) {
    case "червоний":
        console.log("Стоп");
        break;
    case "жовтий":
        console.log("Чекати");
        break;
    case "зелений":
        console.log("Йти");
        break;
    default:
        console.log("Ви не вибрали правильний колір");
        break;
}

// 5

const a = Number(prompt("Перше число:"));
const b = Number(prompt("Друге число:"));
const op = prompt("Операція (+ - * /):");
switch (op) {
    case "+":
        console.log(`${a} + ${b} = ${a+b}`);
        break;
    case "-":
        console.log(`${a} - ${b} = ${a-b}`);
        break;
    case "*":
        console.log(`${a} * ${b} = ${a*b}`);
        break;
    case "/":
        if(b === 0){
            console.log("На нуль ділити не можна");
            break
        }
        console.log(`${a} / ${b} = ${a/b}`);
        break;
    default:
        console.log("Помилка");
        break;
}