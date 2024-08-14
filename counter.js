// counter program

const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const incrementbtn = document.getElementById("incrementbtn");
const counterlab = document.getElementById("counterlab");

let count=0;

incrementbtn.onclick= function(){
    count++;
    counterlab.textContent=count;
}

decreasebtn.onclick= function(){
    count--;
    counterlab.textContent=count;
}

resetbtn.onclick= function(){
    count=0;
    counterlab.textContent=count;
}