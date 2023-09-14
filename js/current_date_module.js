/* "Current date module", v. 1.0 | MIT License | Made by Anatolii Ovcharuk */
/* Use this line in HTML for include: <script src="./js/current_date_module.js" type="module"></script> */
// "use strict"; /* That's Strict mode;  ⛔ DONT USE OTHER CODE WITH THIS IS STRICT, IF YOUR ALL CODE NOT "USE STRICT" OR TYPE="MODULE"... */


const currentTime = () => {
    const remake_date = Date();
    const week = remake_date.slice (0, 3) + ",";

    /* Use one line code below this line */
    const month = remake_date.slice (4, 7); /* Month in string */
    // const date = new Date(); const month = (date.getMonth() + 1); /* Month in number */

    const day = remake_date.slice (8, 10);
    const year = remake_date.slice (11, 15) + ",";
    const time = remake_date.slice (16, 24) + ",";
    const zone = remake_date.slice (25, 33);
    const location =  remake_date.slice (34, 66);
    const result = time + " " + day + " " + month + " " + year + " " + week + " " + zone + " ";
    // console.log (result); /* Show result in console */

    /* Use one line code below this line. Include that's code <p time class="time" id="time"></p> in HTML page for show time. */
    // document.querySelector("[time]").innerHTML = result; /* Show result in HTML by property */
    document.getElementById('time').innerHTML = result; /* Show result in HTML by ID */

    return (result)};
setInterval (currentTime, 1000); /* Delete comment for refresh time on each one second */



/* That's next lines for show example in browser console. Delete comment for view code */
// console.log (`Example current date code: ${currentTime()}`);

