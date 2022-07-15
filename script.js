let homeCount = 0;
let guestCount = 0;

let homePoints = document.getElementById("score-box");
let guestPoints = document.getElementById("score-box2");


function homeFirstPoint() {
   homeCount += 1
   homePoints.innerText = homeCount
}

function homeSecondPoint() {
   homeCount += 2
   homePoints.innerText = homeCount
}

function homeThirdPoint() {
   homeCount += 3
   homePoints.innerText = homeCount
}


function guestFirstPoint() {
   guestCount += 1
   guestPoints.innerText = guestCount
}

function guestSecondPoint() {
   guestCount += 2
   guestPoints.innerText = guestCount
}

function guestThirdPoint() {
   guestCount += 3
   guestPoints.innerText = guestCount
}