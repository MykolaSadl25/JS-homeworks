// 1
console.log(1);

const itemRef = document.querySelectorAll(".item");
console.log(`У списку ${itemRef.length
} категорії.`);

itemRef.forEach((item)=>{
    const titleRef = item.querySelector("h2");
    const elemRef = item.querySelectorAll("li");
    console.log(`
        Категорія:${titleRef.textContent}
        Кількість елементів: ${elemRef.length}
        `);
})

// 2 


const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

const itemsRef = document.getElementById("ingredients")
const items = ingredients.map((item)=>{
    const itemEl = document.createElement("li");
    itemEl.textContent = item;
    return itemEl
})
itemsRef.append(...items)

// 3
const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const elementsRef = document.getElementById("gallery")

const imagesList = images.map((item)=>{
    return `
           <li class="item">
           <img class="image" src="${item.url}" alt="${item.alt}">
           </li>
           `
}).join("")
elementsRef.insertAdjacentHTML("beforeend",imagesList)