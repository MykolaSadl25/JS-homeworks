// 1
const buttonRef = document.querySelector(".button");
console.log(buttonRef);

const inputRef = document.querySelector("[type='text']");
console.log(inputRef);
inputRef.value = "hello";

//2
const imageRef = document.querySelector(".image");
console.log(imageRef);
imageRef.src =
  "https://th.bing.com/th/id/R.58df31b932d49da39b2e4fd55efccb3c?rik=afiRmvS4J4rWQA&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f10%2fimage-wallpaper.jpg&ehk=%2fYo3AtlqfEtE198rGCOCBHKR2RLpW5m1G2i8wrLibZY%3d&risl=&pid=ImgRaw&r=0";

// 3
const linkRef = document.querySelector("a");
linkRef.href = "https://en-gb.facebook.com/";
console.log(linkRef);


const imageEl = document.querySelector(".image2");
imageEl.alt = "giraffe"
console.log(imageEl);

// 4 

const listRef = document.querySelector(".list")
listRef.firstElementChild.textContent = "hello world";
