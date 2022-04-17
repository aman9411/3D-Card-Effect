let elem = document.getElementById('card');
let elem1 = document.getElementById('title');
let rect = elem.getBoundingClientRect();

function transformation(event){
    let x = event.clientX;
    let y = event.clientY;
    console.log(x, y, rect.x, rect.y);
    makeTransformation(x, y);
}

function makeTransformation(x, y){
    let x1 = x-(rect.x+(rect.width/2));
    let y1 = y-(rect.y+(rect.height/2));
    console.log(x-(rect.x+(rect.width/2)), y-(rect.y+(rect.height/2)));
    console.log(Math.cos(x1) * 20, Math.cos(y1) * 20)
    elem.style.transform = `translateZ(10px) rotateX(${x1/5}deg) rotateY(${y1/8}deg)`;
    elem1.style.transform = 'translateZ(50px)'
}

function stablecard(){
    elem.style.transform = `translateZ(0px) rotateX(0deg) rotateY(0deg)`;
    elem1.style.transform = `translateZ(0px)`;
}