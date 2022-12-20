let clientID = "RXFOgUZNawven_5zeOt25eNeZf7BZ2KyJWk3JWyhr-Y";
let endpoint = `https://api.unsplash.com/collections/4538662/?client_id=${clientID}`;

let imageElement = document.querySelector("#unsplashImage");
let imageLink = document.querySelector("#imageLink");
let creator = document.querySelector("#creator");

fetch(endpoint)
    .then(function(response) {
    return response.json();
   })
    .then(function (jsonData) {
     console.log(jsonData);
    })
    
   