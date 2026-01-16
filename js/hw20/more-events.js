const imgRef = document.querySelectorAll(".image");
const listRef = document.querySelector(".gallery");
const itemRef = document.querySelectorAll("li")
imgRef.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("full-image");
  });
});

let index = 0;

window.addEventListener("keydown",(event)=>{
    if (event.key === "ArrowRight") {
        
        if (index < itemRef.length-1) {
            index+=1 
            
            moveSlider()
            // if (index === itemRef.length) {
            //     index = 0
            //     moveSlider()
            //     console.log(index);
            //     console.log(itemRef.length);
            //     console.log("hello");
            // }
        }
        
    }
    if (event.key === "ArrowLeft") {
       
        if (index > 0) {
            index-=1 
           moveSlider()
        }
    }
})

function moveSlider(){
const update = -index * 100;
listRef.style.transform = `translateX(${update}px)`
}


// 2

const inputRef = document.querySelector("[type='number']");
const createBtn = document.querySelector("[data-action='render']");
const resetBtn = document.querySelector("[data-action='destroy']");
const boxesRef = document.querySelector("#boxes");

let size = 30
function createBoxes(amount){
    const elements = []
    for (let i = 0; i< amount; i+=1) {
        const red = Math.round(Math.random()*(255 - 1) + 1);
        const green = Math.round(Math.random()*(255 - 1) + 1);
        const blue = Math.round(Math.random()*(255 - 1) + 1);
        const divEl = document.createElement("div");
        divEl.style.backgroundColor = `rgb(${red},${green},${blue})` 
        divEl.style.width = size + "px";
        divEl.style.height = size + "px";
        size += 10;
        elements.push(divEl)
    }
    boxesRef.append(...elements)
}



createBtn.addEventListener("click",()=>{
    const value = inputRef.value;
    createBoxes(value)
    inputRef.value = "";
})

resetBtn.addEventListener("click",()=>{
    boxesRef.innerHTML= ""
    size = 30
})