let container = document.getElementById("dice-container");
let myVal = document.getElementById("dice-container");
let generateDieBtn = document.getElementById("generate-die-btn");
let rollDiceBtn = document.getElementById("roll-dice-btn");
let diceArray = []; // WORK ON THIS NEXT

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement("div");
        this.div.classList.add("newDie");
        this.roll();
        this.div.innerText = this.value;
        // below is how you call another method from inside a constructor
        container.appendChild(this.div);
        diceArray.push(this); // WORK ON THIS NEXT
        // this.div.classList.add("rollDice";)
        this.div.addEventListener("dblclick", function() {
            this.div.remove();
        }.bind(this));
    }
    
    roll() {
        let randomValue = Math.floor(Math.random() * 6) + 1;
        this.value = randomValue;
        this.div.innerText = this.value;
    }
}

// This code will generate a new div each time the button is clicked
generateDieBtn.addEventListener("click", createDiv);
rollDiceBtn.addEventListener("dblclick", updateDiv);

function createDiv() {
    new Die();
    // console.log(this.value); 
};

function updateDiv() {
    new Die();
};


