const button =document.createElement("button")
button.setAttribute("type","button")
button.innerText = "click here to wish"
button.addEventListener("click",foo);
document.body.append(button)
function foo()
{
    alert(" 🌷🌹🌼Happy 🌺 Onam💐🌾🌸");
}
const btn = document.getElementById("btn")
btn.addEventListener("mouseover",foo1)
function foo1()
{
    document.body.style.backgroundColor="red"
}
btn.addEventListener("mouseout",foo2)
function foo2()
{
    document.body.style.backgroundColor=""
}
//div

const task= document.getElementById("div1")
task.addEventListener("mouseover",foo3)
function foo3()
{
    document.task.style.backgroundColor="blue"
}
task.addEventListener("mouseout",foo4)
function foo4()
{
    document.task.style.backgroundColor=""
}
document.body.append(task)

