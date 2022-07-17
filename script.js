const portfolioUrl = 'https://portfolio-4de20.firebaseapp.com/';

const createIframe = () => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src',`${portfolioUrl}#${Math.floor(Math.random()*10000)}`);
    iframe.setAttribute('frameborder','0');
    document.body.appendChild(iframe);
}

const displayError = err =>{

}

// fetch(`${portfolioUrl}skills.json`, {
//     method: 'GET',
//     mode:'no-cors',
//     cache: 'no-cache'
//   })
//     .then(response => response.json() )
//     .then(result=>{
//         console.log(result)
//         createIframe();
//     })
//     .catch(error => {
//         document.body.innerHTML = `Error: ${error}`;
//         console.error('There was an error!', error);
//     });

// async function fetchText() {
//     let response = await fetch(`${portfolioUrl}skills.json`,{mode:'no-cors'});

//     console.log(response.status); // 200
//     console.log(response.statusText); // OK

//     if (response.status === 0) {
//         let data = await response.text();
//         // handle data
//         console.log(data)
//     }
// }

// fetchText();

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML =
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", `${portfolioUrl}skills.json`, false);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/')
    xhttp.send();
}
loadXMLDoc();