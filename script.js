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
buttonDouble.onclick=function(){
let target = cards.length * 2;
    console.log("deck has" + cards.length + "cards.");
    for (let card of cards) {
        if(cards.length!==target) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "div style='background-image:url("+ url + card+")'class='card'>");
            
}
    }
};
console.log("Now the deck has"+ cards.length+"cards.");
buttonDouble.style.color="green";
// Button to Shuffle Cards


// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});