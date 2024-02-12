/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    // loop over each item in the data
    for (let game of games) {
        // create a new div element, which will become the game card
        const gameCard = document.createElement("div");

        // add the class game-card to the list
        gameCard.classList.add("game-card");

        // set the inner HTML using a template literal to display some info 
        // about each game
        gameCard.innerHTML = `
            <h3>${game.name}</h3>
            <img src="${game.img}" alt="${game.name}" class="game-img">
            <p>Description: ${game.description}</p>
            <p>Pledged Amount: $${game.pledged.toLocaleString()}</p>
            <p>Number of Backers: ${game.backers}</p>
            <button class="donate-now-btn">Donate Now</button>
            <button class="play-game-btn">Play Game</button>
        `;

        // append the game card to the games-container
        gamesContainer.appendChild(gameCard);

        //added this for donate now button
        const donateNowBtn = gameCard.querySelector('.donate-now-btn');
        donateNowBtn.addEventListener('click', () => {
            console.log(`Clicked Donate Now for ${game.name}`);
            window.location.href = 'https://www.google.com';    //Add the actual link you want to be displayed here 
        });

        //added this for play game button
        const playGameBtn = gameCard.querySelector('.play-game-btn');
        playGameBtn.addEventListener('click', () => {
            console.log(`Clicked Play Game for ${game.name}`);
            window.location.href = 'https://www.amazon.com';    //Add the actual link you want to be displayed here 
        });

    }
}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games
addGamesToPage(GAMES_JSON);




/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalContributions = GAMES_JSON.reduce((total, game) => total + game.backers, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = `Total Contributions: ${totalContributions.toLocaleString()}`;

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

// use reduce() to calculate the total amount donated
const totalRaised = GAMES_JSON.reduce((total, game) => total + game.pledged, 0);

// set inner HTML using template literal
raisedCard.innerHTML = `Total Raised: $${totalRaised.toLocaleString()}`;

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

// Display the total number of games
gamesCard.innerHTML = `Total Number of Games: ${GAMES_JSON.length}`;



/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);

    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(unfundedGames);
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    const fundedGames = GAMES_JSON.filter(game => game.pledged >= game.goal);

    // use the function we previously created to add funded games to the DOM
    addGamesToPage(fundedGames);
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
const numUnfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal).length;

// create a string that explains the number of unfunded games using the ternary operator
const unfundedGamesDescription = numUnfundedGames === 0
  ? "All games are currently funded."
  : `A total of $${totalContributions.toLocaleString()} has been raised for ${GAMES_JSON.length} games. Currently, ${numUnfundedGames} game${numUnfundedGames === 1 ? " is" : "s are"} still unfunded. We need your help to secure more funding!`;

// create a new DOM element containing the template string and append it to the description container
const unfundedGamesParagraph = document.createElement("p");
unfundedGamesParagraph.textContent = unfundedGamesDescription;
descriptionContainer.appendChild(unfundedGamesParagraph);

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const name1 =  sortedGames[0].name;
const name2 =  sortedGames[1].name;;
// create a new element to hold the name of the top pledge game, then append it to the correct element
firstGameContainer.append(name1);
// do the same for the runner up item
secondGameContainer.append(name2);


//Extra: Add functionality to log in button
// grab the login button element
const loginBtn = document.getElementById("login-btn");

// add a click event listener to the login button
loginBtn.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com";
});
