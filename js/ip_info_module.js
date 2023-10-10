/* "IP info module", v. 1.0 | MIT License | Made by Anatolii Ovcharuk */
/* Use this line in HTML for include: <script src="./js/ip_info_module.js" type="module"></script> */
// "use strict"; /* That's Strict mode;  ⛔ DONT USE OTHER CODE WITH THIS IS STRICT, IF YOUR ALL CODE NOT "USE STRICT" OR TYPE="MODULE"... */



/* VERSION 1 */

// fetch('https://ipapi.co/json/')
//     .then(info => info.json())
// /* SELECT ONLY ONE "THEN" STRING */
//     .then(info => document.querySelector('.ip').innerHTML = `You're current IP Adress: ${info.ip}`)
// //  .then(info => document.querySelector('#ip').innerHTML = `You're current IP Adress: ${info.ip}`)
//     .catch(error => console.log("ERROR", error));


/* VERSION 2 */

let dataIP = "Not detected.";
let colorIP = "#f9f522";
showIP();

async function initializateIP () {
    await fetch('https://ipapi.co/json/')
    .then(info => info.json())
    .then(info => {dataIP = info.ip; colorIP = "#26f922";})
    .catch(error => console.log("ERROR", error));

    if (dataIP === "Not detected." || dataIP === undefined || dataIP === false) {
        colorIP = "#f92222";
        console.log("WARNING! IP Adress not detected.");
    }; 

    showIP();
}

function showIP () {
/* SELECT ONLY ONE STRING */
document.querySelector('.ip').innerHTML = `You're current IP Adress: <a href="https://en.ipshu.com/picture/${dataIP}.png" style="color:${colorIP};" target="_blank">${dataIP}</a>`;
// document.querySelector('#ip').innerHTML = `You're current IP Adress: <a href="https://en.ipshu.com/picture/${dataIP}.png" style="color:${colorIP};" target="_blank">${dataIP}</a>`;
}

initializateIP();
