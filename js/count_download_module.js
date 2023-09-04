/* "Count download module", v. 1.0 | MIT License | Made by Anatolii Ovcharuk */

/* Use this line in HTML for include: <script src="../../js/count_download_module.js" type="module"></script> */

// "use strict"; /* That's Strict mode;  ⛔ DONT USE OTHER CODE WITH THIS IS STRICT, IF YOUR ALL CODE NOT "USE STRICT" OR TYPE="MODULE"... */

        // "use strict";
        // let clickDownload = 0;

        const requestURL = '/json/data.json';
        let response = await fetch(requestURL);
        let clickDownload = (await response.json()).countDownload;

        document.querySelector("[count]").addEventListener("click", clickCounter);
        document.querySelector("[click-header]").addEventListener("click", clickCounter);

        const countRef = document.querySelector("#countDownload");
        console.log(countRef);
        console.log(countRef.textContent);


        function clickCounter () {
            console.log (`Start to download...`);
            let result = (clickDownload += 1);

            const data = {
                "countDownload": result
            }

            // const formed = JSON.stringify(data);
            const xhr = new XMLHttpRequest();
 
            xhr.open("POST", requestURL);
            // xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(data)

            // send(formed);

            // fetch(requestURL, {
            //         method: 'POST', // или 'PUT'
            //         body: JSON.stringify(data),
            //         headers: {
            //         'Content-Type': 'application/json; charset=utf-8'
            //         }
            //     })

            return result;
        };






        // async function send (data) {
        //     await fetch(requestURL, {
        //         method: 'POST', // или 'PUT'
        //         body: JSON.stringify(data),
        //     })
        // }

        // const send = async (data) => await fetch(requestURL, {
        //     method: 'POST', // или 'PUT'
        //     body: JSON.stringify(data),
        //     headers: {
        //     'Content-Type': 'application/json; charset=utf-8'
        //     }
        // })






        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //         },
        //     body: JSON.stringify(data),
        //     // localhost:3000/api
        //  };


        //  const send = async (data) => await fetch('/api',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //         },
        //     body: JSON.stringify(data),
        //     // localhost:3000/api
        //  });



        const currentCountDownload = () => 
        document.querySelector("[countDownload]").innerHTML = `Количество скачиваний: ${clickDownload}`; /* Show result in HTML by property */
        // document.getElementById('countDownload').innerHTML = `Количество скачиваний: ${clickDownload}`; /* Show result in HTML by ID */
        
        setInterval (currentCountDownload, 1000);