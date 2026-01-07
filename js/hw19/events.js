// 1
const redBtnRef = document.querySelector("[value='red']")
const whiteBtnRef = document.querySelector("[value='white']")
const greenBtnRef = document.querySelector("[value='green']")
const bodyRef =document.querySelector("body")
redBtnRef.addEventListener("click",()=>{
    bodyRef.style.backgroundColor = "red"
})
whiteBtnRef.addEventListener("click",()=>{
    bodyRef.style.backgroundColor = "white"
})
greenBtnRef.addEventListener("click",()=>{
    bodyRef.style.backgroundColor = "green"
})

//2
const inputRef = document.querySelector("#name-input");
const titleRef = document.querySelector("#name-output");

inputRef.addEventListener("input",(event)=>{
    if (event.currentTarget.value !== "") {
        titleRef.textContent = event.currentTarget.value
    }
    else if(event.currentTarget.value === ""){
        titleRef.textContent = "незнайомець"
    }
})

// 3
const passwordRef = document.getElementById("validation-input");
const passwordLength = passwordRef.dataset.length
passwordRef.addEventListener("blur",()=>{
    if (passwordRef.value.length < passwordLength) {
        passwordRef.classList.add("invalid")
        passwordRef.classList.remove("valid")
    }
    else if(passwordRef.value.length >= passwordLength){
        passwordRef.classList.add("valid")
        passwordRef.classList.remove("invalid")
    }
})

//4
const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

inputEl.addEventListener("input",(event)=>{
    spanEl.style.fontSize = event.currentTarget.value+"px"
})