// let input;
// let searchUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=Joker%20(2019%20film)';
// // input = document.getElementById('input');
// var x = document.getElementById("desc");
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText)
//         console.log(response);
//         var id = Object.keys(response.query.pages);
//         console.log(response.query.pages[id].extract);
//         x.innerText = response.query.pages[id].extract;
//         }
//     }
//     xhr.open('GET', searchUrl);
//     xhr.send();