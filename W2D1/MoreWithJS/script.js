
let menu = document.querySelector('.menu');

// FUNCTIONALITY
function displayAlert(){
    alert("this is a cute kitten");
    menu.setAttribute("hidden", true)
}

function swapIn(elem){
    elem.src = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png";
}

function swapOut(elem){
    elem.src = "http://www.placekitten.com/200/200";
}

function clicked(e){
    e.preventDefault();
    if(e.button == 0){
        console.log("left button clicked");
    }
    if(e.button == 2 ){
        console.log("right button clicked");

        console.log(menu);
        menu.removeAttribute("hidden");
    }
}