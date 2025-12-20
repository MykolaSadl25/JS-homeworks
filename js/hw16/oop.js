// 1
console.log("1 завдання");

const Account = function({login,email}){
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function(){
    console.log(`Your login is ${this.login} and email ${this.email}`);
}
console.log(Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo();

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo();

// 2

console.log("2 завдання");

class User{
    constructor({name,age,followers}={}){
        this.name = name;
        this.age = age;
        this.followers = followers
    }
    getInfo(){
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers}`);
    }
}

const mango1 = new User({
 name: 'Mango',
 age: 2,
 followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly1 = new User({
 name: 'Poly',
 age: 3,
 followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

// 3

console.log("3 Завдання");

class Storage{
    constructor(items){
       this.items = items;
    }
    getItems(){
      return this.items
    }
    addItem(item){
        this.items.push(item);
        return this.items;
    }
    removeItem(item){
        const indexOfItem = this.items.indexOf(item)
       if (indexOfItem !== -1) {
        const deleteItem = this.items.splice(indexOfItem,1);
       }
       return this.items;
    }
}

const storage = new Storage([
 'Нанітоіди',
 'Пролонгер',
 'Залізні жупи',
 'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// 4 
console.log("4 завдання");

class StringBuilder{
    constructor(defaultValue){
        this._value = defaultValue;
    }
    get value(){
        return this._value
    }
    append(str){
        this._value = this._value + str;
    }
    prepend(str){
        this._value = str + this._value;
    }
    pad(str){
        this._value = str + this._value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

// 5
console.log("5 завдання");

class Car {
 /*
  * Додай статичний метод `getSpecs(car)`,
  * який приймає об'єкт-машину як параметр і виводить
  * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
  */
 static getSpecs(car){
     console.log(`Maximum speed:${car.maxSpeed}, Current speed:${car.speed}, isOn:${car.isOn}, Distance:${car.distance}, Price:${car.price}`)
 }
 /*
  * Конструктор отримує об'єкт налаштувань.
  *
  * Додай властивості майбутнього екземпляра класу:
  * speed - поточна швидкість, початкова 0
  * price - ціна автомобіля
  * maxSpeed - максимальна швидкість
  * isOn - заведений автомобіль, значення true або false. Спочатку false
  * distance - загальний кілометраж, спочатку 0
  */
 constructor({maxSpeed,price}) {
    this.speed = 0;
    this.price = price;
    this.maxSpeed =maxSpeed;
    this.isOn = false;
    this.distance = 0;
 }
 /*
  * Додай геттер і сеттер для властивості price,
  * який буде працювати з властивістю ціни автомобіля.
  */
get price(){
     return this._price;
 }
set price(amount){
     return this._price = amount;
 }
 /*
  * Додай код для того, щоб завести автомобіль
  * Записує у властивість isOn значення true
  */
 turnOn() {
    this.isOn = true;
 }

 /*
  * Додай код для того, щоб заглушити автомобіль
  * Записує у властивість isOn значення false,
  * і скидає поточну швидкість в 0
  */
 turnOff() {
    this.isOn = false;
    this.speed = 0
 }

 /*
  * Додає до властивості speed отримане значення,
  * за умови, що результуюча швидкість
  * не більше, ніж значення властивості maxSpeed
  */
 accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
          this.speed += value;
    }
    else{
         "Швидкість неможе бути більша за максимальну швидкість"
    }
 }

 /*
  * Забирає від властивості speed отримане значення,
  * за умови, що результуюча швидкість не менше нуля
  */
 decelerate(value) {
    if (this.speed !== 0) {
         this.speed -= value;
    }
 }

 /*
  * Додає в поле distance кілометраж (hours * speed),
  * але тільки в тому випадку, якщо машина заведена!
  */
 drive(hours) {
    if (this.isOn) {
        const countDistance = hours * this.speed;
     this.distance +=countDistance
    }
 }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);


mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000