//Var
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let xAttempts = 1

//Events
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", enter)

//Functions
function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleTryClick(event){
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick(){
  location.reload()
}

function enter(e){
  if(e.key == "Enter" && screen1.classList.contains("hide")){
    handleResetClick()
  }
}