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
        // console.log(data);
        // createSearchResultCard(); // calling the function here
    };

    // Send request to server
    xhr.send();
}

function createCard(item) {
    // Create search Card
    searchCard = document.createElement("div");
    searchCard.classList.add("search-card");
    let searchNameYear = document.createElement("div");
    Object.assign(searchNameYear.style, {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        
    });
    let searchNameButton = document.createElement("div");
    Object.assign(searchNameButton.style, {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    });


    Object.assign(searchCard.style, {
        padding: "5px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
    });

    let cardFilmImage = document.createElement("img");
    Object.assign(cardFilmImage.style, {
        width: "50px",
        minHeight: "70px",
        marginRight: "20px",
    });
    let cardFilmName = document.createElement("h2");
    Object.assign(cardFilmName.style, {
        textAlign: "start",
        marginBottom: "5px",
        fontSize: "25px",
        fontWeight: "bold",
    });
    let cardYears = document.createElement("p");
    Object.assign(cardYears.style, {
        textAlign: "center",
        marginRight: "20px",
        fontSize: "20px",
    });
    let details = document.createElement('button');
    Object.assign(details.style, {
        textAlign: "center",
        position: 'relative',
        fontSize: "15px",
        width: "50px",
        color: "gray",
    });
    details.textContent = "Info"
    Object.assign(details.style, {
        padding: "10px",
        border: "1px solid gray",
        background: "inherit",
        borderRadius: "10px",
    });

    // add data to card
    cardFilmImage.src = item.Poster; // setting the image source
    cardFilmName.textContent = item.Title; // setting the film name
    cardYears.textContent = item.Year; // setting the year

    // add elements to card
    searchCard.appendChild(cardFilmImage);
    searchNameYear.appendChild(cardFilmName);
    searchCard.appendChild(searchNameYear);
    searchCard.appendChild(searchNameButton);
    searchNameYear.appendChild(cardYears);
    searchNameButton.appendChild(searchNameYear);
    searchNameButton.appendChild(details);


    return searchCard;
}



// search result card
function createSearchResultCard() {
    data.Search.map((i) => {
        filmCard = createCard(i);
        showSearchResult.appendChild(filmCard);
    });
}
let filmCard;
let data;
let inputFilmNameValue;
let searchCard;


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
showSearchResult.classList.add("cards-area");

header.innerHTML = "Movie Search";

// add elements to DOM
body.appendChild(header);
body.appendChild(main);
main.appendChild(inputSections);
inputSections.appendChild(inputFilmName);
inputSections.appendChild(findFilmButton);
inputSections.appendChild(showSearchResult);




// Receaving data from server

//By Input
inputFilmName.addEventListener("input", () => {

        if (inputFilmName.value.length >= 2) {
            inputFilmNameValue = (inputFilmName.value).trim();
            sendRequest();
            createSearchResultCard();
        } else if (inputFilmName.value.length < 2) {
            // let deleteCard = document.getElementsByClassName('.search-card');
            let elements = document.querySelectorAll('.search-card');
            elements.forEach(function (element) {
                element.remove();
            });
            // showSearchResult.removeChild(deleteCard);
        } else {
            console.log("error");
        }
});

// By Button
findFilmButton.addEventListener("click", () => {

    if (inputFilmName.value.length >= 2) {
        inputFilmNameValue = (inputFilmName.value).trim();
        sendRequest();
        createSearchResultCard();
    } else if (inputFilmName.value.length < 2) {
        let elements = document.querySelectorAll('.search-card');
        elements.forEach(function (element) {
            element.remove();
        });
    } else {
        console.log("error");
    }
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
    background: "#2f2f2f",
    borderBottom: "2px solid black",
});


Object.assign(main.style, {
    background: "#2f2f2f",
    width: "100vw",
    height: "100vh",
    textAlign: "center",
});

Object.assign(inputSections.style, {
    background: "black",
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
    fontSize: "30px",
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
    position: "relative",
    top: "-4px",
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