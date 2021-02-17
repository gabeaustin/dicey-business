let min = 1;
let max = 0;

class Die {
    constructor(x, y) {
        this.div = document.createElement("div");
        this.div.classList.add("newDie");
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
    }
}

// This code will generate a new div each time the button is clicked
let generateDieBtn = document.getElementById("generate-die-btn");
generateDieBtn.addEventListener("click", createDiv);

function createDiv() {

};

function roll(min, max) {
    // Math.random() -> generates a # from 0 up to 1 (0.9999999)
    // I want a number not larger than 6
    return Math.floor(Math.random() * (max - min) + min);
};


// class Die {
//     constructor() {
//         this.div = document.getElementById("dic-container");
//         this.div.classList.add("button")
//         this.value = value;
//     }

//     roll() {
//         return Math.floor((Math.random() * 7));
//     }
// }


// function randomVal() {
//     return Math.floor((Math.random() * 7));
// }
