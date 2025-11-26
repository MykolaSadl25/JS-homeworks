// 1
console.log("1 Task");

const user1 = {
  hobby: "football",
  premium: true,
};
const { hobby, premium } = user1;
console.log(hobby, premium);

console.log("===============================================");

const user = {
  name: "Mykola",
  age: 14,
  isStudent: true,
};

const { name, age, isStudent } = user;
console.log(name, age, isStudent);

console.log("===============================================");

const people = {
  yaroslav: 20,
  mykola: 50,
  vlad: 40,
  mariia: 0,
};

const { yaroslav, mykola, vlad, mariia } = people;
console.log(yaroslav, mykola, vlad, mariia);

console.log("===============================================");

const workers = {
  oleksandr: 12000,
  lucas: 10000,
  vladP: 13000,
  maksim: 20000,
  yaroslavK: 11500,
};

const { oleksandr, lucas, vladP, maksim, yaroslavK } = workers;
console.log(oleksandr, lucas, vladP, maksim, yaroslavK);

console.log("===============================================");

const products = [
  { nameOfProduct: "Laptop", price: 1200, category: "electronics" },
  { nameOfProduct: "Headphones", price: 80, category: "electronics" },
  { nameOfProduct: "Chair", price: 150, category: "furniture" },
  { nameOfProduct: "Mug", price: 12, category: "kitchen" },
];

const [item1, item2, item3, item4] = products;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);

console.log("===============================================");

const store = [
  { productName: "Laptop", price: 1200, quantity: 3 },
  { productName: "Headphones", price: 80, quantity: 10 },
  { productName: "Mouse", price: 25, quantity: 50 },
  { productName: "Keyboard", price: 45, quantity: 20 },
  { productName: "Chair", price: 150, quantity: 5 },
  { productName: "Mug", price: 12, quantity: 100 },
];

const [obj1 = { productName, price, quantity }, obj2, obj3, obj4, obj5, obj6] =
  store;
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);

// 2
console.log("2 Task");

// 2. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
const account = {
  balance: 0,


  transactions: [],
  id: 1,

  createTransaction(amount, type) {
    const transaction = {
      amount: amount,
      type: type,
      id: this.id,
    };
    this.id += 1;
    return transaction;
  },
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount,Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Зняття такої суми не можливо, недостатньо коштів");
      return;
    }
    else{
      this.balance -=amount;
      const transaction = this.createTransaction(amount,Transaction.WITHDRAW);
      this.transactions.push(transaction);
    }
  },
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
      else{
        return `Транзкації #${id} не існує`;
      }
      }
    }
,
  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        total += this.transactions[i].amount;
      }
    }
    return total;
  },
};

account.deposit(15200);
account.deposit(15200);
account.withdraw(1500);
account.withdraw(1500);
console.log(account.getBalance());
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account);
