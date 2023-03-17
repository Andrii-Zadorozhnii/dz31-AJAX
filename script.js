
async function sendRequest() {
    //1. Create object request
    const xhr = new XMLHttpRequest();

    //2. Where send and parameters
    xhr.open('GET', `https://omdbapi.com/?s=${inputFilmNameValue}&page=1&apikey=5f4e693c`);
    

    //3. On success request from server
    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    // Send request to server
    xhr.send()
}


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




let inputFilmNameValue = "";


// Receaving data from server

//By Input
inputFilmName.addEventListener("input", () => {
    inputFilmNameValue = (inputFilmName.value).trim();
    console.log(inputFilmNameValue);
    sendRequest()
    console.log(sendRequest());
});

// By Button
findFilmButton.addEventListener("click", () => {
    inputFilmNameValue = (inputFilmName.value).trim();
    console.log(inputFilmNameValue);
    sendRequest()
    console.log(sendRequest());
});

// Create search Card
const searchCard = document.createElement('div');
const cardFilmImage = document.createElement('img');
const cardFilmName = document.createElement('h2');
const cardYears = document.createElement('p');

// for (let i = 0; i < data.Search.length; i++) {

































































findFilmButton.innerHTML = "Search movie"

//Main windows class
Object.assign(header.style, {
    width: "100vw",
    height: "100px",
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
    height: "300px",
    maxWidth: "670px",
    width: "100%",
    background: "white",
    margin: "0 auto",
    marginTop: "10px",
    borderRadius: "10px",
});














// add elements to DOM
body.appendChild(header);
body.appendChild(main);
main.appendChild(inputSections);
inputSections.appendChild(inputFilmName);
inputSections.appendChild(findFilmButton);
inputSections.appendChild(showSearchResult);