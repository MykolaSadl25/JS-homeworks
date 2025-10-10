// 1 task
const text = "lorem";
const subTitle = "lorem ipsum dolor";
if (text === "" && subTitle === ""){
    console.log("Не всі поля заповнені");
}
else if(text === "lorem" && subTitle === ""){
    console.log("Не всі поля заповнені");
}
else if(text === "" && subTitle === "lorem ipsum dolor"){
    console.log("Не всі поля заповнені");
}
else{
    console.log("Обидва поля заповнені");
}

// 2 task
const a = 7;
const b = 2;
if (a+b > 10){
    console.log("Сума більша за 10");
}
else{
    console.log("Сума менша або дорівнює 10");
    
}

// 3 task
const word = "JavaScript";
if (word.includes('JavaScript')){
    console.log("Текст містить слово JavaScript");
}
else{
    console.log("Текст не містить слово JavaScript");
}

// 4 task
const number = 2;
if (number > 10 && number < 20){
    console.log("Число входить в діапазон від 10 до 20");
}
else{
    console.log("Число не входить в діапазон від 10 до 20");
    
}

// 5 task 

const myName = "Mykola";
const email = "mykola@mail.com";
const password = "123qwerty";
if (myName.length > 3 && email.includes("@") && password.length > 6) {
    console.log("Перенаправлення на іншу сторінку");
}
else{
    console.log("Помилка: неправильне заповнення");
    
}