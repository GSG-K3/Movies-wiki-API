let posterimg = document.getElementById("posterimg");
let url = "https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";


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
        console.log(response.results[i].title)
        console.log(response.results[i].vote_average)
        console.log(response.results[i].overview)
        posterimg.src = ` http://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;
        //    /iZf0KyrE25z1sage4SYFLCCrMi9.jpg
        //     url=}
        // console.log("hello")
    }
}
movies(url, myfun);