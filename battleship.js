//declaring the locations using const because these will not change and remain constant.
let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

// the code below will not have an initial value, so setting it up
//like this will ensure that is is undefined.
let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

// the following code is from me

while (isSunk == false) {
    guess = prompt("Ready, aim, fire!(enter a number from 0 - 6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number")
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit! Enter another number!");
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("Miss! Try again!");
            guesses = guesses + 1;
        }
    }
}
alert("Congrats, it took you " + guesses + " guesses.");
//this code works!!!!!!
//BUT if you get the same hit the same location 3 times it still tells you that you sunk the ship.
