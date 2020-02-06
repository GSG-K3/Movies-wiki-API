let url = "https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
let searchUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=Ad%20Astra%20(film)';
let searchUrl2 = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=Bad%20Boys%20for%20Life"
let searchUrl3 = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=Joker_(2019_film)"
let searchUrl1 = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=1917"

let model;
let movielist = document.querySelector("#movies");
let infoText;
let close;

function CreateModel() {
    model = document.createElement("div");
    infoText = document.createElement("p");
    let searchButton = document.getElementsByClassName("searchButton");

    close = document.createElement("span");
    close.textContent = "X";
    let modal_content = document.createElement("div");


    model.className = "modal";
    model.id = "myModel";
    modal_content.className = "modal-content";
    close.className = "close"


    modal_content.appendChild(close);
    modal_content.appendChild(infoText);

    model.appendChild(modal_content);
}

CreateModel();

let xhr = new XMLHttpRequest();
const apiCall = (url, callback) => {
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let response = JSON.parse(xhr.responseText);
            if (callback)
                callback(response);
        }
    }
    xhr.open("GET", url)
    xhr.send()
}

// get moves
const buildMoves = response => {
    for (let i = 0; i < 4; i++) {


        let firstdiv = document.createElement("div"); // 1st
        let seconddiv = document.createElement("div"); // miag
        let infoButton = document.createElement("button");

        infoButton.id = "myBtn"
        infoButton.className = "myBtn"
        infoButton.innerText = "Show more!"






        // let posterimg = document.createElement("img"); // img
        // posterimg.src = `http://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;

        // let moviename = document.createElement("h1");
        // moviename.innerText = response.results[i].title;
        // let movierate = document.createElement("h2");
        // movierate.innerText = response.results[i].vote_average;
        // let movieabout = document.createElement("p");


        // seconddiv.appendChild(posterimg);
        // firstdiv.appendChild(seconddiv);
        // firstdiv.appendChild(moviename);
        // firstdiv.appendChild(movierate);
        // firstdiv.appendChild(infoButton);
        // movielist.appendChild(firstdiv);


        let posterimg = document.createElement("img"); // img
        posterimg.src = ` http://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;

        //  document.getElementsByClassName
        let moviename = document.createElement("h1");
        moviename.innerText = response.results[i].title;
        let movierate = document.createElement("h2");
        movierate.classList.add("rate")
        movierate.innerText = response.results[i].vote_average;

        seconddiv.appendChild(posterimg);
        let thirdDiv = document.createElement("div");
        thirdDiv.classList.add("rating")
        let rateLabel = document.createElement("label");
        rateLabel.classList.add("rate-label")
        rateLabel.innerHTML = "Rating: "

        firstdiv.appendChild(seconddiv);
        firstdiv.appendChild(moviename);
        firstdiv.appendChild(thirdDiv);
        thirdDiv.appendChild(rateLabel);
        thirdDiv.appendChild(movierate);

        movielist.appendChild(firstdiv);

        firstdiv.appendChild(seconddiv).classList.add();
        firstdiv.appendChild(moviename).classList.add("name");
        firstdiv.appendChild(thirdDiv).classList.add("rating");

        firstdiv.appendChild(infoButton);

        movielist.appendChild(firstdiv).classList.add("row","movieContainer");



        infoButton.onclick = function() {

            // modal_content.appendChild(close);
            // modal_content.appendChild(infoText);


            firstdiv.appendChild(model);

            // infoText.innerText = response.query.pages[id].extract;

            if (i == 0) { apiCall(searchUrl, wikifunction) }
            if (i == 1) { apiCall(searchUrl1, wikifunction) }
            if (i == 2) { apiCall(searchUrl2, wikifunction) }
            if (i == 3) { apiCall(searchUrl3, wikifunction) }


            let _model = document.getElementById("myModel");
            if (model !== undefined)
                _model.style.display = "block";

        }
    }
}


// get info from Wiki 
const wikifunction = response => {
    console.log(response);
    var id = Object.keys(response.query.pages);
    console.log(response.query.pages[id].extract);
    infoText.innerText = response.query.pages[id].extract;

}

apiCall(url, buildMoves);


close.onclick = function() {

    let _model = document.getElementById("myModel")
    _model.style.display = "none";

}






















/***
 * 
 * 
 * 
 * 
 * searchButton.onclick = function() {
    apiCall(theSearchUrl, searchfunction)

}
const searchfunction = response => {

    let inputSearch = document.getElementsByClassName("inputSearch");

    let theSearchUrl = `http://www.omdbapi.com/?t=${inputSearch.innerText}&apikey=2720201f`
    let firstdiv = document.createElement("div"); // 1st
    let seconddiv = document.createElement("div"); // miag
    let posterimg = document.createElement("img"); // img
    posterimg.src = ` http://image.tmdb.org/t/p/w185${response.Poster}`;

    let moviename = document.createElement("h1");
    // moviename.classList.add("dgfd", "sdfd")
    moviename.innerText = response.Title;
    let movierate = document.createElement("h2");
    movierate.innerText = response.Ratings[0].Value;
    let movieabout = document.createElement("p");
    movieabout.innerText = response.results[i].Plot;

    seconddiv.appendChild(posterimg);

    firstdiv.appendChild(seconddiv);
    firstdiv.appendChild(moviename);
    firstdiv.appendChild(movierate);

    firstdiv.appendChild(movieabout);
    firstdiv.appendChild(infoButton);

    movielist.appendChild(firstdiv);



}
 */
