let container = document.getElementById("dice-container");
let generateDieBtn = document.getElementById("generate-die-btn");
let rollDiceBtn = document.getElementById("roll-dice-btn");
let sumDiceBtn = document.getElementById("sum-dice-btn");
let diceArray = []; // WORK ON THIS NEXT

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement("div");
        this.div.classList.add("newDie");
        this.roll();
        this.div.innerText = this.value;
        container.appendChild(this.div);
        // this.div.classList.add("rollDice";)
        this.div.addEventListener("dblclick", function () {
            this.div.remove();
        }.bind(this));
    }

    roll() {
        let randomValue = Math.floor(Math.random() * 6) + 1;
        this.value = randomValue;
        this.div.innerText = this.value;
    }
}

generateDieBtn.addEventListener("click", function(){
    let newDieClass = new Die();
    diceArray.push(newDieClass); // WORK ON THIS NEXT
});

rollDiceBtn.addEventListener("click", function () {
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i].value = diceArray[i].roll;
        diceArray[i].div.innerText = diceArray[i].value;
    }
});

sumDiceBtn.addEventListener("click", function() {
    let total = 0;
    for (let i = 0; i < diceArray.length; i++){
        total+=diceArray[i].value;
    }
    alert(`The sum of all the dice: ${total}`);
})



