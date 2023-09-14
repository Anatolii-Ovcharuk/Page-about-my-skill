/* "Visit and time loading counter module", v. 1.0 | MIT License | Made by Anatolii Ovcharuk */

/* Use this line in HTML for include: <script src="./js/visit_and_time_loading_counter_module.js" type="module"></script> */
/* Use this line after <title> (in start) HTML: <script> "use strict"; const timeStartLoadingPage = Date.now(); </script> */
/* Use this line before </body> (in end) HTML: <script> "use strict"; const timeEndLoadingPage = Date.now(); </script> */

// "use strict"; /* That's Strict mode;  ⛔ DONT USE OTHER CODE WITH THIS IS STRICT, IF YOUR ALL CODE NOT "USE STRICT" OR TYPE="MODULE"... */





/* Code using LocalStorage */

/* That's default variables*/
let visitCount = 0;
let totalTimeLoadPage = 0;
let resultTimeLoadPage = 0;


if (localStorage.key(0) === "totalTimeLoadPage" && localStorage.key(1) === "visitCount") { // localStorage.length >= 1
    visitCount = localStorage.getItem("visitCount");
    visitCount = Number.parseFloat(visitCount);
    totalTimeLoadPage = localStorage.getItem("totalTimeLoadPage");
    totalTimeLoadPage = Number.parseFloat(totalTimeLoadPage);
} else {
    localStorage.setItem("visitCount", visitCount);
    localStorage.setItem("totalTimeLoadPage", totalTimeLoadPage);
}


resultTimeLoadPage = (timeEndLoadingPage - timeStartLoadingPage) / 1000;

const totalTimeLoad = () => {
    const result = totalTimeLoadPage += resultTimeLoadPage;
    totalTimeLoadPage = result;
    localStorage.setItem("totalTimeLoadPage", result);
    return result;
}

const visitProcess = () => {
    const result = visitCount += 1;
    visitCount = result;
    localStorage.setItem("visitCount", result);
    return result;
}

const statsMiddle = () => totalTimeLoad() / visitCount;


    /* Use one line code below this line. Include that's code <p class="visit" id="visit" visit ></p> in HTML page for show information. */
    // document.querySelector("[visit]").innerHTML = `Current time to load this page ${resultTimeLoadPage}s. | Visited of all time: ${visitProcess()}. | Middle time to loading page of all time: ${statsMiddle().toFixed(3)}s. `; /* Show result in HTML by property */
    document.getElementById('visit').innerHTML = `Current time to load this page ${resultTimeLoadPage} s. | You are visited this page of all time: ${visitProcess()}. | Time to loading page of all time: ${statsMiddle().toFixed(3)} s. `; /* Show result in HTML by ID */

    // document.getElementById('visit').innerHTML = `Current time to load this page ${resultTimeLoadPage} s.`; /* Show result in HTML by ID */
















// CODE WITH USING DATA !!!!


/* That's default variables*/
// let visitCount = 0;
// let totalTimeLoadPage = 0;
// let  resultTimeLoadPage = 0; // +++ MINIMAL

// const requestURL = '/json/data.json';
// let response = await fetch(requestURL);
// let visitCount = (await response.json()).visitCount;

// let data = {
//   "id": 0.1,
//   "countDownload": 0,
//   "visitCount": 0,
//   "totalTimeLoadPage": 0
// };


// resultTimeLoadPage = (timeEndLoadingPage - timeStartLoadingPage) / 1000; // +++ MINIMAL

// const totalTimeLoad = () => {
//     const result = totalTimeLoadPage += resultTimeLoadPage;
//     data.totalTimeLoadPage = result
//     // send(requestURL, {"totalTimeLoadPage": result});
//     return result;
// }

// const visitProcess = () => {
//     const result = visitCount += 1;
//     data.visitCount = result
//     // send(requestURL, {"visitCount": result});
//     return result;
// }

// const statsMiddle = () => totalTimeLoad() / visitCount;

    /* Use one line code below this line. Include that's code <p class="visit" id="visit" visit ></p> in HTML page for show information. */
    // document.querySelector("[visit]").innerHTML = `Current time to load this page ${resultTimeLoadPage}s. | Visited of all time: ${visitProcess()}. | Middle time to loading page of all time: ${statsMiddle().toFixed(3)}s. `; /* Show result in HTML by property */
    // document.getElementById('visit').innerHTML = `Current time to load this page ${resultTimeLoadPage} s. | Visited of all time: ${visitProcess()}. | Time to loading page of all time: ${statsMiddle().toFixed(3)} s. `; /* Show result in HTML by ID */

    // document.getElementById('visit').innerHTML = `Current time to load this page ${resultTimeLoadPage} s.`; /* Show result in HTML by ID */ // +++ MINIMAL

    // console.log(data);



// ----------------------------- ОТПРАВКА - № 1 -----------------------------

// const options = {
//   method: "POST", // *GET, POST, PATCH, PUT, DELETE, etc.
//   mode: 'no-cors', // no-cors, *cors, same-origin
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   referrerPolicy: 'unsafe-url', // no-referrer, *client
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//     // "Allow": "GET, POST, PATCH, HEAD, OPTIONS",
//   },
//   // redirect: 'follow', // manual, *follow, error
//   // credentials: 'same-origin', // include, *same-origin, omit
// };

// fetch(`/../../json/data.json`, options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(`ERROR! ${error}`));

// ----------------------------- ОТПРАВКА - № 2 -----------------------------

// let totalTimeLoadPage = (await response.json()).totalTimeLoadPage;

// const response = (info) => {
//     let response = fetch(requestURL);
//     return (response.json()).info;
// }

// const send = (data) => fetch('/json/data.json', {
//     method: 'POST', // или 'PUT'
//     body: JSON.stringify(data),
//     headers: {
//     'Content-Type': 'application/json; charset=utf-8'
//     }})


    //     // Пример отправки POST запроса:
// async function send(url, data) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *client
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     // return await response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then((data) => {
//       console.log(data); // JSON data parsed by `response.json()` call
//     });