let Count = 0;
let display = document.getElementById("score-box")
let display2 = document.getElementById("score-box2")


function first() {
   Count += 1
   display.innerText = Count
}

function second() {
   Count += 2
   display.innerText = Count
}

function third() {
   Count += 3
   display.innerText = Count
}



function fourth() {
   Count += 1
   display2.innerText = Count
}

function fifth() {
   Count += 2
   display2.innerText = Count
}

function sixth() {
   Count += 3
   display2.innerText = Count
}