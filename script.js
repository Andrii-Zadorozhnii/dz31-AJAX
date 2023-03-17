async function sendRequest() {
    //1. Create object request
    const xhr = new XMLHttpRequest();

    //2. Where send and parameters
    xhr.open(
        "GET",
        `https://omdbapi.com/?s=${inputFilmNameValue}&page=1&apikey=5f4e693c`
    );

    //3. On success request from server
    xhr.onload = function () {
        data = JSON.parse(xhr.response);
        console.log(data);
        createSearchResultCard(); // calling the function here
    };

    // Send request to server
    xhr.send();
}

function createCard(item) {
    // Create search Card
    let searchCard = document.createElement("div");

    Object.assign(searchCard.style, {
        padding: "5px",
        display: "flex",
        alignItems: "center",
    });

    let cardFilmImage = document.createElement("img");
    Object.assign(cardFilmImage.style, {
        width: "50px",
        minHeight: "70px",
        marginRight: "20px",
    });
    let cardFilmName = document.createElement("h2");
    Object.assign(cardFilmName.style, {
        textAlign: "center",
        marginRight: "20px",
        fontSize: "20px",
    });
    let cardYears = document.createElement("p");
    Object.assign(cardYears.style, {
        textAlign: "center",
        marginRight: "20px",
        fontSize: "20px",
    });

    // add data to card
    cardFilmImage.src = item.Poster; // setting the image source
    cardFilmName.textContent = item.Title; // setting the film name
    cardYears.textContent = item.Year; // setting the year

    // add elements to card
    searchCard.appendChild(cardFilmImage);
    searchCard.appendChild(cardFilmName);
    searchCard.appendChild(cardYears);

    return searchCard;
}

// search result card
function createSearchResultCard() {

    // for(i = 0; i < 1; i++) {
    //     let filmCard = createCard(i);
    //     showSearchResult.appendChild(filmCard);
    // }


    data.Search.map((i) => {
        let filmCard = createCard(i);
        showSearchResult.appendChild(filmCard);
    });
}

let data;
let inputFilmNameValue = "";


// Creater Web interface
const body = document.querySelector('body');
const header = document.createElement("div");
const main = document.querySelector('.main');
const inputSections = document.createElement("div");
const inputFilmName = document.createElement('input');
const findFilmButton = document.createElement('button');
const searchResult = document.createElement('div');
const searcResultFilmName = document.createElement('h2');
const searcResultActorName = document.createElement('h2');
const showSearchResult = document.createElement('div');

header.innerHTML = "Movie Search";






// Receaving data from server

//By Input
inputFilmName.addEventListener("input", () => {
    inputFilmNameValue = (inputFilmName.value).trim();
    console.log(inputFilmNameValue);
    sendRequest();
    createSearchResultCard();
});

// By Button
findFilmButton.addEventListener("click", () => {
    inputFilmNameValue = (inputFilmName.value).trim();
    console.log(inputFilmNameValue);
    sendRequest();
    createSearchResultCard();
});










findFilmButton.innerText = "Search movie"

//Main windows class
Object.assign(header.style, {
    width: "100vw",
    height: "100px",
    color: "white",
    fontSize: "40px",
    textAlign: "center",
    padding: '25px',
    background: "rgb(9,14,138,1)",
    borderBottom: "2px solid black",
});


Object.assign(main.style, {
    background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(9,14,138,1) 100%)",
    width: "100vw",
    height: "100vh",
    textAlign: "center",
});

Object.assign(inputSections.style, {
    background: "rgb(9,14,138,0)",
    width: "100vw",
    height: "contentFit",
    textAlign: "center",
    padding: "50px",
});

Object.assign(inputFilmName.style, {
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
    height: "50px",
    placeholder: "Film Name",
    color: "black",
    marginRight: "20px",
    borderRadius: "10px",
});

Object.assign(findFilmButton.style, {
    textAlign: "center",
    width: "150px",
    height: "50px",
    placeholder: "Film Name",
    color: "white",
    padding: "5px",
    borderRadius: "10px",
    background: "inherit",
});

Object.assign(showSearchResult.style, {
    maxHeight: "300px",
    maxWidth: "670px",
    width: "100%",
    background: "white",
    margin: "0 auto",
    marginTop: "10px",
    borderRadius: "10px",
    overflowY: "scroll",
});






// add elements to DOM
body.appendChild(header);
body.appendChild(main);
main.appendChild(inputSections);
inputSections.appendChild(inputFilmName);
inputSections.appendChild(findFilmButton);
inputSections.appendChild(showSearchResult);