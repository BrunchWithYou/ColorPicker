// Variables
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let randomButton = document.querySelector('.random-button');
let saveButton = document.querySelector('.save-button');
let body = document.querySelector('body');
let sidebarButton = document.querySelector('.sidebar-button')
let sideContainer = document.querySelector('.sidecontainer')

// Functions
function random(number){
    return Math.floor(Math.random()*number)
}

//Generate color
randomButton.addEventListener('click', randomColor)

function randomColor () {
    box1.style.backgroundColor = `rgba(${random(255)},${random(255)},${random(255)}, ${Math.random()})`;
    box2.style.backgroundColor = `rgba(${random(255)},${random(255)},${random(255)}, ${Math.random()})`;
    body.style.background = `linear-gradient(to right, ${box2.style.backgroundColor}, ${box1.style.backgroundColor}`;

}

//Open sidebar

sidebarButton.addEventListener('click', openSidebar)

function openSidebar (){
    if(sideContainer.style.right != '0%'){
        sideContainer.style.right = '0%'
    } else {
        sideContainer.style.right = '-15%'
    }
    
}

