var yourScore = 0;
var numberToGuess = randomNumGen();

function randomNumGen() {
    return Math.floor(Math.random() * 102) + 19;
}

var wins = 0;
var losses = 0;
var gems;

function randomNumGems() {
    return {
        red: {
            number: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/Red Gem.jpg"
        },
        green: {
            number: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/Green Gem.jpg"
        },
        yellow: {
            number: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/Gold Gem.jpg"
        },
        blue: {
            number: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/Blue Gem.jpg"
        }
    };
}

var winLoss = function() {
    if (yourScore > numberToGuess) {
        alert("LOOOOOSSSEEERRRRRRR!!!")
        losses++
        $("#losses").text(losses);
    }
    else if (yourScore === numberToGuess) {
        alert("Winner Winner!")
        wins++
        $("#wins").text(wins);
    }
};