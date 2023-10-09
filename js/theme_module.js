/* "Theme module", v. 1.0 | MIT License | Made by Anatolii Ovcharuk */
/* Use this line in HTML for include: <script src="./js/theme_module.js" type="module"></script> */
// "use strict"; /* That's Strict mode;  ⛔ DONT USE OTHER CODE WITH THIS IS STRICT, IF YOUR ALL CODE NOT "USE STRICT" OR TYPE="MODULE"... */

const theme = {
    btn: document.querySelector("[theme-btn]"),
    bdy: document.body.style.backgroundColor,
};

const colors = {
    first: "#272727",
    second: "#3f0f0f",
    third: "#2d3b4e",
    fourth: "#4a4e2d",
    fiveth: "#2f4e2d",
};

theme.bdy = colors.first;

theme.btn.addEventListener("click", initialTheme);

function initialTheme () {
    if (theme.bdy === colors.first) {theme.bdy = colors.second; document.body.classList.toggle("theme-body-first"); document.body.classList.toggle("theme-body-second");} 
    else if (theme.bdy === colors.second) {theme.bdy = colors.third; document.body.classList.toggle("theme-body-second"); document.body.classList.toggle("theme-body-third");} 
    else if (theme.bdy === colors.third) {theme.bdy = colors.fourth; document.body.classList.toggle("theme-body-third"); document.body.classList.toggle("theme-body-fourth");} 
    else if (theme.bdy === colors.fourth) {theme.bdy = colors.fiveth; document.body.classList.toggle("theme-body-fourth"); document.body.classList.toggle("theme-body-fiveth");}   
    else if (theme.bdy === colors.fiveth) {theme.bdy = colors.first; document.body.classList.toggle("theme-body-fiveth"); document.body.classList.toggle("theme-body-first");}  
    else {console.log ("Error to change color theme!")}

    console.log(`Change color theme: ${theme.bdy}`)
    };
