//summation
let addBtn = document.querySelector(".sum")
addBtn.addEventListener("click", function(){
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let op = num1 + "+" + num2
    document.getElementById("result").value = eval(op)
})

//subtraction
let subBtn = document.querySelector(".sub")
subBtn.addEventListener("click", function(){
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let op = num1 + "-" + num2
    document.getElementById("result").value = eval(op)
})

//multiplication
let mulBtn = document.querySelector(".mul")
mulBtn.addEventListener("click", function(){
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let op = num1 + "*" + num2
    document.getElementById("result").value = eval(op)
})

//division
let divBtn = document.querySelector(".div")
divBtn.addEventListener("click", function(){
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let op = num1 + "/" + num2
    document.getElementById("result").value = eval(op)
})

//clear btn
let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", function(){
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("result").value = ""
})