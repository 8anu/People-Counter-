//camelCase
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let resetEl

console.log(saveEl);


let count = 0;

function increment(){
  count = count +1;
  countEl.innerText = count;
  
}

function save(){
  let prevEnt = count + " - ";
  saveEl.textContent += prevEnt;
  console.log(count);
}

function reset(){
  count = 0;
  countEl.textContent = 0;
  console.log(count);
}

