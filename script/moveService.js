let url = "https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
let movielist = document.querySelector(".movielist");
let searchUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=Ad%20Astra%20(film)';
let searchUrl2 = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=Bad%20Boys%20for%20Life"
let searchUrl3 = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=Ford%20v%20Ferrari"
let searchUrl1 = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=1917"
let infoText = document.createElement("p");
let xhr = new XMLHttpRequest;
const movies = (url, callback) => {
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

const myfun = response => {
    for (let i = 0; i < 4; i++) {

        let searchButton = document.getElementsByClassName("searchButton");
        let inputSearch = document.getElementsByClassName("inputSearch");

        let firstdiv = document.createElement("div"); // 1st
        let seconddiv = document.createElement("div"); // miag
        let model = document.createElement("div");
        let infoButton = document.createElement("button");
        let modal_content = document.createElement("div");
        let close = document.createElement("span");


        // image
        infoButton.id = "myBtn"
        infoButton.className = "myBtn"
        infoButton.innerText = "Show more!"
        model.className = "modal";
        model.id = "myModel";
        modal_content.className = "modal-content";
        close.className = "close"

        let posterimg = document.createElement("img"); // img
        posterimg.src = ` http://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;

        document.getElementsByClassName
        let moviename = document.createElement("h1");
        // moviename.classList.add("dgfd", "sdfd")
        moviename.innerText = response.results[i].title;
        let movierate = document.createElement("h2");
        movierate.innerText = response.results[i].vote_average;

        seconddiv.appendChild(posterimg);

        firstdiv.appendChild(seconddiv);
        firstdiv.appendChild(moviename);
        firstdiv.appendChild(movierate);

        firstdiv.appendChild(movieabout);
        firstdiv.appendChild(infoButton);
        // firstdiv.appendChild(model);
        // modal_content.appendChild(close);
        // modal_content.appendChild(infoText)
        // model.appendChild(modal_content)
        movielist.appendChild(firstdiv);

        firstdiv.appendChild(seconddiv).classList.add();
        firstdiv.appendChild(moviename).classList.add("name");
        firstdiv.appendChild(movierate).classList.add("rate");

        

        movielist.appendChild(firstdiv).classList.add("row");
       
       
      
 


        // posterimg.src = ` http://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;
        //    /iZf0KyrE25z1sage4SYFLCCrMi9.jpg
        //     url=}
        // console.log("hello")

        infoButton.onclick = function() {
                firstdiv.appendChild(model);
                if (i == 0) { movies(searchUrl, wikifunction) }
                if (i == 1) { movies(searchUrl1, wikifunction) }
                if (i == 2) { movies(searchUrl2, wikifunction) }
                if (i == 3) { movies(searchUrl3, wikifunction) }


                // infoText.innerText = response.query.pages[id].extract;
                modal_content.appendChild(close);
                modal_content.appendChild(infoText);
                model.appendChild(modal_content);
            }
            // searchButton.onclick = function() {

        //     let theSearchUrl = `http://www.omdbapi.com/?t=${inputSearch.innerText}&apikey=2720201f`
        //     movies(theSearchUrl, searchfunction)

        // const searchfunction = response => {

        //     let firstdiv = document.createElement("div"); // 1st
        //     let seconddiv = document.createElement("div"); // miag

        // }







        // modal.style.display = "block";

        // if (event.target == modal) {
        //     modal.style.display = "none";
        // }


        // When the user clicks on <span> (x), close the modal
        // close.onclick = function() {
        //     modal.style.display = "none";
        // }

        // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }


    }
}
const wikifunction = response => {
    console.log(response);
    var id = Object.keys(response.query.pages);
    console.log(response.query.pages[id].extract);
    infoText.innerText = response.query.pages[id].extract;

}
movies(url, myfun);
// movies(searchUrl, wikifunction)
