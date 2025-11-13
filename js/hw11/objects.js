// 1
console.log("1 завдання");

const bankAccount = {
    ownerName:"Mr Business Man",
    accountNumber: 123456789,
    balance: 1000,
    deposit(){
        const amountOfDeposit = Number(prompt("Введіть суму:").trim());
        const confirmAction = confirm(`Ви впевнені що хочете закласти ${amountOfDeposit} гривень на ваш рахунок?`);
        if (confirmAction === true) {
            this.balance += amountOfDeposit;
        }
    },
    withdraw(){
        const amountOfWithdraw = Number(prompt("Введіть суму:").trim());
        const confirmAction = confirm(`Ви впевнені що бажаєте зняти ${amountOfWithdraw} гривень з вашого рахунку?`)
        if (confirmAction === true) {
            this.balance -= amountOfWithdraw;
        }
    }
}
bankAccount.deposit();
bankAccount.withdraw();
console.log(bankAccount.balance);

// 2
console.log("2 завдання");

const weather = {
    temperature: 0,
    humidity: "89%",
    windSpeed: "8 км/год",

    checkTemp(){
        const askTemperature = Number(prompt("Яка у вас температура за вікном"));
        if (askTemperature < 0) {
            this.temperature = askTemperature;
            alert("Температура нижче 0");
        }
        else if(askTemperature >= 0){
            this.temperature = askTemperature;
            alert("Температура більше або дорівнює 0");
        }
    }
}
weather.checkTemp()
console.log(weather);

// 3 
console.log("3 завдання");

const user = {
    name:"Rolinod",
    email:"rolinod230@mail.com",
    password:"strong_password123",

    login(){
        const askEmail = prompt("Введіть свій емейл");
        const askPassword = prompt("Введіть свій пароль");
        if (askEmail === this.email && askPassword === this.password) {
            alert("Ви успішно зайшли в обліковий запис");
        }
        else if(askEmail === this.email || askPassword === this.password){
            alert("Неправильний пароль або емейл")
        }
}
}
user.login();
console.log(user);

// 4
console.log("4 завдання");

const movie = {
    title: "Five Nights at Freddy’s",
    director: "Emma Tammi",
    year:2023,
    rating:5.5,

    checkRating(){
        if (this.rating >= 8) {
            alert("Рейтинг фільму більше 8");
            return this.rating;
        }
        else if(this.rating < 8){
            alert("Рейтинг фільму занадто низький");
            return this.rating;
        }
    }
}

console.log(movie.checkRating());
