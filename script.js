let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count; 
}

function save(){
    saveEl.textContent += count + " - ";  //using .innerText won't work as needed i.e : " - "
    countEl.textContent = 0;
    count = 0;
}