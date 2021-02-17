let minRollValue = 1;
let maxRollValue = 6;
let dieCount = 4;
let diceArray = []
let generateDieBtn = document.getElementById("generate-die-btn");
let container = document.getElementById("dice-container");

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement("div");
        this.div.classList.add("newDie");
        this.roll(); // will change
        this.div.innerText = this.value;
        // below is how you call another method from inside a constructor
        container.appendChild(this.div);
        diceArray.push(this)
        // this.div.style.left = `70px`; // ?
        // this.div.style.top = `50px`; // ?
    }
    
    roll() {
        let randomValue = Math.floor(Math.random() * 6) + 1;
        this.value = randomValue;
        this.div.innerText = this.value;   
    }
}

// This code will generate a new div each time the button is clicked
generateDieBtn.addEventListener("click", createDiv);


// puts divs in a grid
function createDiv() {
    new Die();
};


