// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/0d80090e-3e0b-4039-af38-c5ab75cf1eba/";
let cards = [
    "card%201.jpg?v=1710262649273",
    "card2.jpg?v=1710262661738",
    "card3.jpg?v=1710262672196",
    "card4.jpg?v=1710262680349",
    "card5.jpg?v=1710262687398",
    "card6.jpg?v=1710262704643",
    "card7.jpg?v=1710262709248",
    "card8.jpg?v=1710262717196",
];
let clickedIds = [];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    let target = cards.length * 2;
    console.log("deck has" + cards.length + "cards.");
    for (let card of cards) {
        if (cards.length !== target) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style='background-image:url(" + url + card + ")' class='card'>");

        }
    }
};
console.log("Now the deck has" + cards.length + "cards.");
buttonDouble.style.color = "green";

// Button to Shuffle Cards

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
buttonShuffle.onclick = function() {
    shuffle(cards);
    console.log("Im shuffling the cards");
    let i = 0;
    game.innerHTML = "";
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url + card + ")'id='" + i + "' class='card'>"
        );
        i = i + 1;
    }
};

// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (let card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};

// Here we need a function for clicking on individual cards.


$(document).click(function(event) {

    let clickedId = event.target.id;
    console.log(clickedId);

    if (clickedId !== "") {
        document.getElementById(clickedId).style.backgroundImage = "url('" + url + cards[clickedId]+"')";
        console.log(url + cards[clickedId]);
        clickedIds.push(clickedId);
        console.log(clickedIds);
        if (clickedIds.length === 2) {
            let card1pictrue = document.getElementById(clickedIds[0]).style.backgroundImage;
            let card2pictrue = document.getElementById(clickedIds[1]).style.backgroundImage;
            console.log(card1pictrue);
            console.log(card2pictrue);
            if (card1pictrue === card2pictrue) {
                console.log("match");
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);
            }
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);
            console.log("no match");
        }
    }
});