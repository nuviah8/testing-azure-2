// This function rolls the dice
function rollDice() {
    for (let i = 1; i <= 5; i++) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice' + i).textContent = diceRoll;
    }
    
    // Automatically refocus the button to enable "Enter" key rolling
    document.getElementById('rollBtn').focus();
}