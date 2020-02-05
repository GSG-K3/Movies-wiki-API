let url = "https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
let movielist = document.querySelector(".movielist");


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


        let firstdiv = document.createElement("div"); // 1st
        let seconddiv = document.createElement("div"); // miag
        let model = document.createElement("div");
        let infoButton = document.createElement("button");
        let modal_content = document.createElement("div");
        let close = document.createElement("span");
        let infoText = document.createElement("p");

        // image
        infoButton.id = "myBtn"
        infoButton.className = "myBtn"
        infoButton.innerText = "Show more!"
        model.className = "model";
        model.id = "myModel";
        modal_content.className = "modal-content";
        close.className = "close"

        let posterimg = document.createElement("img"); // img
        posterimg.src = ` http://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;

        let moviename = document.createElement("h1");
        // moviename.classList.add("dgfd", "sdfd")
        moviename.innerText = response.results[i].title;
        let movierate = document.createElement("h2");
        movierate.innerText = response.results[i].vote_average;
        let movieabout = document.createElement("p");
        movieabout.innerText = response.results[i].overview;

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





        // posterimg.src = ` http://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;
        //    /iZf0KyrE25z1sage4SYFLCCrMi9.jpg
        //     url=}
        // console.log("hello")
    }
}
movies(url, myfun);