console.log("Hurray!!! you did it good job!!");


function alertSomething(myString){
    alert(myString)
}


let myElement = document.querySelector("#modal");
let container = document.querySelector(".container");
console.log(myElement);

function showPayWall(){
    myElement.removeAttribute("hidden");
    container.classList.add("blur");
}

function hideModal(){
    myElement.setAttribute("hidden", "true");
    container.classList.remove("blur");
}

function changeText(elem){
    elem.innerText = "Hello"
}

function changeBack(elem){
    elem.innerText = "News"
}
